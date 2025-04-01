from django.core.cache import cache
import random
from django.conf import settings


def create_otp(email):
    otp = f"{random.randint(0000, 9999):04d}"
    cache.set(f"otp_{email}", otp, timeout=300)
    return otp


def verify_otp(email, typed_otp):
    stored_otp = cache.get(f"otp_{email}")
    if stored_otp and str(stored_otp) == str(typed_otp):
        cache.delete(f"otp_{email}")
        return True
    return False

import os
import requests


def send_email(to_email, subject, message):
    response = requests.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {settings.RESEND_API_KEY}",
            "content-type": "application/json"
            },
        json={
            "from": settings.DEFAULT_FROM_EMAIL,
            "to": [to_email],
            "subject": subject,
            "text": message,
        },
    )

    if response.status_code != 200:
        print("Resend error:", response.json())

    return response.json()
