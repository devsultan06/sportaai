import os
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# To rename the avatar file name
def rename_avatar(instance, file_name):
    extension = os.path.splitext(file_name)[1]
    user_id = instance.id
    new_filename = f"user_{user_id}{extension}"
    return os.path.join("profile_pictures", new_filename)


class SportaUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("User must have an email address")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        
        return self.create_user(email, password, **extra_fields)

# A custom user model
class SportaUser(AbstractUser):
    ROLES_CHOICES = [("athlete", "Athlete"),
                     ("coach", "Coach"),
                     ("analyst", "Analyst"),
                     ]

    username = None
    email = models.EmailField(unique = True)
    first_name = None
    last_name =None
    full_name = models.CharField(max_length=350)
    avatar = models.ImageField(upload_to=rename_avatar, blank=True)
    role = models.CharField(max_length=10, choices=ROLES_CHOICES, blank=True)
    sport = models.CharField(max_length=100, blank=True)
    
    objects = SportaUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
# Note: I removed the Athlete model because the User model I created already differentiates users by their roles. This keeps things simpler and avoids redundancy. Feel free to delete this note once you've seen it.
