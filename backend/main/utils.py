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


def set_cookie(response, key, value):
    secure_flag = not settings.DEBUG
    response.set_cookie(
        key=key,
        value=value,
        httponly=True,
        secure=secure_flag,
        samesite="Lax",
    )


# To rename the avatar file name
def rename_avatar(instance, file_name):
    extension = os.path.splitext(file_name)[1]
    user_id = instance.id
    new_filename = f"user_{user_id}{extension}"
    return os.path.join("profile_pictures", new_filename)
