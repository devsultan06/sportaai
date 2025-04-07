from djoser.email import ActivationEmail, PasswordResetEmail
from .utils import create_otp
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

class SportaPasswordResetEmail(PasswordResetEmail):
    def send(self, to, fail_silently=False, **kwargs):
        email = to[0]
        otp = create_otp(email)

        html_content = render_to_string("main/index.html", {"otp": otp})
        subject = "Reset Password"

        msg = EmailMultiAlternatives(
            subject,
            "",  # Fallback plain text (optional)
            "no_reply@sportaAI.com",
            [email],
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send(fail_silently=fail_silently)

class SportaActivationEmail(ActivationEmail):
    def send(self, to, fail_silently=False, **kwargs):
        email = to[0]
        otp = create_otp(email)

        html_content = render_to_string("main/index.html", {"otp": otp})
        subject = "Verify Your Account"

        msg = EmailMultiAlternatives(
            subject,
            "",  # Fallback plain text (optional)
            "no_reply@sportaAI.com",
            [email],
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send(fail_silently=fail_silently)
