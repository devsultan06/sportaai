from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from .models import AthleteProfile, AnalystProfile, CoachProfile

User = get_user_model()

def delete_profile(Object, instance):
    profile = Object.objects.filter(user=instance).first()
    if profile:
        profile.delete()

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    user = instance
    if user.role:
        if user.role == "athlete":
            if not hasattr(user, "athlete"):
                if hasattr(user, "analyst"):
                    delete_profile(AnalystProfile, user)
                if hasattr(user, "coach"):
                    delete_profile(CoachProfile, user)
                AthleteProfile.objects.create(user=user)
                return

        elif user.role == "coach":
            if not hasattr(user, "coach"):
                if hasattr(user, "athlete"):
                    delete_profile(AthleteProfile, user)
                if hasattr(user, "analyst"):
                    delete_profile(AnalystProfile, user)
                CoachProfile.objects.create(user=user)
                return
        elif user.role == "analyst":
            if not hasattr(user, "analyst"):
                if hasattr(user, "athlete"):
                    delete_profile(AthleteProfile, user)
                if hasattr(user, "coach"):
                    delete_profile(CoachProfile, user)
                AnalystProfile.objects.create(user=user)
            return
    