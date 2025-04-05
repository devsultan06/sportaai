from django.http import JsonResponse

# from .schemas import AthleteSchema
# from .models import SportaUser
from .serializers import ActivateUserSerializer

# from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import get_user_model
from .utils import create_otp, verify_otp, send_email
from djoser.views import UserViewSet
from django.core.mail import send_mail
from rest_framework.generics import ListCreateAPIView

from django.shortcuts import redirect
from django.conf import settings
from django.http import HttpResponseRedirect
from django.urls import reverse
from rest_framework.authtoken.models import Token
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
import requests
import json
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.views import TokenObtainPairView, TokenBlacklistView
from rest_framework_simplejwt.serializers import TokenRefreshSerializer

User = get_user_model()


def set_cookie(response, key, value):
    secure_flag = not settings.DEBUG
    response.set_cookie(
        key=key,
        value=value,
        httponly=True,
        secure=secure_flag,
        samesite="Lax",
    )


class ActivateUserView(APIView):
    serializer_class = ActivateUserSerializer

    def post(self, request):
        email = request.data.get("email")
        user_otp = request.data.get("otp")

        if verify_otp(email, user_otp):
            try:
                user = User.objects.get(email=email)
                user.is_active = True
                user.save()
            except User.DoesNotExist:
                return Response(
                    {"message": "User does not exist"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            return Response(
                {"message": "OTP verified. Account activated"},
                status=status.HTTP_200_OK,
            )

        return Response(
            {"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST
        )


# Endpoint to initiate Google OAuth
class GoogleLoginRedirectView(APIView):
    def get(self, request):
        # Build the Google OAuth URL
        google_auth_url = "https://accounts.google.com/o/oauth2/v2/auth"
        redirect_uri = request.build_absolute_uri(reverse("google_callback"))
        client_id = settings.SOCIALACCOUNT_PROVIDERS["google"]["APP"]["client_id"]

        # Construct the authorization URL
        params = {
            "client_id": client_id,
            "redirect_uri": redirect_uri,
            "response_type": "code",
            "scope": "email profile",
            "access_type": "online",
            "state": request.GET.get("next", "/"),  # Where to redirect after auth
        }

        print(redirect_uri)
        print(params)

        auth_url = f"{google_auth_url}?{'&'.join([f'{key}={value}' for key, value in params.items()])}"
        return redirect(auth_url)


# Endpoint that receives callback from Google
class GoogleCallbackView(APIView):
    def get(self, request):
        code = request.GET.get("code")
        state = request.GET.get("next", "/")

        if not code:
            return Response({"error": "no_code"}, status=400)

        client_id = settings.SOCIALACCOUNT_PROVIDERS["google"]["APP"]["client_id"]
        client_secret = settings.SOCIALACCOUNT_PROVIDERS["google"]["APP"]["secret"]
        redirect_uri = request.build_absolute_uri(reverse("google_callback"))

        token_url = "https://oauth2.googleapis.com/token"
        token_payload = {
            "code": code,
            "client_id": client_id,
            "client_secret": client_secret,
            "redirect_uri": redirect_uri,
            "grant_type": "authorization_code",
        }

        token_response = requests.post(token_url, data=token_payload)
        token_data = token_response.json()

        if "error" in token_data:
            return Response({"error": "token_exchange_failed"}, status=400)

        access_token = token_data.get("access_token")

        user_info_url = "https://www.googleapis.com/oauth2/v3/userinfo"
        user_info_response = requests.get(
            user_info_url, headers={"Authorization": f"Bearer {access_token}"}
        )

        user_info = user_info_response.json()
        email = user_info.get("email")
        name = user_info.get("name", "")

        if not email:
            return Response({"error": "no_email"}, status=400)

        # Create or get user using custom model
        user, created = User.objects.get_or_create(
            email=email, defaults={"full_name": name}
        )

        # Generate JWT access and refresh tokens using SimpleJWT
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token  # Access token (short-lived)

        # Optionally, you can set additional claims (payload data) on your access token
        access_token["email"] = user.email
        access_token["full_name"] = user.full_name

        # Return the tokens to the frontend
        response = Response(
            {
                "email": user.email,
                "full_name": user.full_name,
            },
            status=200,
        )
        set_cookie(response, "access_token", access_token)
        set_cookie(response, "refresh_token", refresh)
        
        return response


# Views for handling login
class SportaTokenObtainView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        email_field = User.EMAIL_FIELD
        email = request.data.get(email_field)

        try:
            user = User.objects.get(email=email)
            if not user.is_active:
                return Response(
                    {"message": "Account is inactive. Please verify your email."},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
        except User.DoesNotExist:
            pass

        try:
            # set the token in the cookies instead of sending as a response
            response = super().post(request, *args, **kwargs)
            access_token = response.data.get("access")
            refresh_token = response.data.get("refresh")
            

            set_cookie(response, "access_token", access_token)
            set_cookie(response, "refresh_token", refresh_token)

            response.data.pop("access", None)
            response.data.pop("refresh", None)
            response.data["message"] = "Login successful. Tokens set in cookies."

            return response

        except TokenError as e:
            raise InvalidToken(e.args[0])


# Handling token refresh
class SportaTokenRefreshView(APIView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh_token")
        if not refresh_token:
            return Response({"message": "Refresh token missing."})
        serializer = TokenRefreshSerializer(data={"refresh": refresh_token})
        try:
            serializer.is_valid(raise_exception=True)
            new_access_token = serializer.validated_data["access"]
        except TokenError:
            return Response(
                {"message": "Invalid refresh token"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
            
        response = Response({"message": "Token refresh successfully."})
        
        set_cookie(response, "refresh_token", new_access_token)

        return response


class SportaLogoutView(APIView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh_token")
        if not refresh_token:
            return Response({"message": "Refresh token missing."})

        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception:
            pass

        response = Response(
            {"message": "Logged out successfully."}, status=status.HTTP_200_OK
        )
        response.delete_cookie("access_token")
        response.delete_cookie("refresh_token")
        return response
