from django.contrib.auth import get_user_model
from rest_framework import serializers
from djoser.serializers import (
    UserSerializer,
    UserCreateSerializer,
    PasswordResetConfirmSerializer,
)
from .utils import verify_otp

User = get_user_model()


class SportaUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = User
        fields = (
            "id",
            "email",
            "full_name",
            "password",
            "avatar",
            "role",
            "sport",
        )


class SportaUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "id",
            "email",
            "full_name",
            "avatar",
            "role",
            "sport",
        )


class SportaResetConfirm(PasswordResetConfirmSerializer):
    email = serializers.EmailField()
    otp = serializers.CharField()
    uid = serializers.CharField(required=False)
    token = serializers.CharField(required=False)

    def validate(self, attrs):
        otp = attrs.get("otp")
        email = attrs.get("email")

        if not verify_otp(email, otp):
            raise serializers.ValidationError("OTP expired or doesn't exist, Request for another OTP")

        try:
            user = User.objects.get(email=email)
            self.user = user
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this email does not exist.")

        return attrs

class ActivateUserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField()