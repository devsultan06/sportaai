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

User = get_user_model()

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
                return Response({"message": "User does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        
            return Response({"message": "OTP verified. Account activated"}, status=status.HTTP_200_OK)
    
        return Response({"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)
