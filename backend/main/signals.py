from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from .models import AthleteProfile, AnalystProfile, CoachProfile

user = get_user_model()

def delete_profile()