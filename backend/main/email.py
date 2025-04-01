from djoser.email import ActivationEmail, PasswordResetEmail
from .utils import create_otp
from django.core.mail import send_mail


class SportaPasswordResetEmail(PasswordResetEmail):
    def send(self, to, fail_silently=False, **kwargs):
        email = to[0]
        otp = create_otp(email)
        send_mail(
            "Reset password",
            f"Your otp is {otp}\nIt expires in 5 minutes.",
            "no_reply@sportaAI.com",
            [email],
        )

class SportaActivationEmail(ActivationEmail):
    def send(self, to, fail_silently=False, **kwargs):
        email = to[0]
        otp = create_otp(email)
        send_mail(
            "Verify your account",
            f"Your otp is {otp}\nIt expires in 5 minutes.",
            "no_reply@sportaAI.com",
            [email],
        )