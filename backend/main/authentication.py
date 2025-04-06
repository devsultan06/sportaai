from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import AccessToken
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

class SportaCookieAuthentication(BaseAuthentication):
    def authenticate(self, request):
        access_token = request.COOKIES.get("access_token")
        if not access_token:
            return None

        try:
            token = AccessToken(access_token)
            user_id = token.get("user_id")
            print(token)
        except Exception:
            raise AuthenticationFailed(
                {"message": "Token has either expired or invalid"},
            )

        try:
            user = User.objects.get(id=user_id)
            if user and user.is_active:
                return (user, token)
        except User.DoesNotExist:
            raise AuthenticationFailed(
                {"message": "User is not active or does not exist"},
            )
