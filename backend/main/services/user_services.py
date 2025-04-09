from main.models import AthleteProfile, AnalystProfile, CoachProfile

def delete_profile(Object, instance):
    profile = Object.objects.filter(user=instance).first()
    if profile:
        profile.delete()

def created_profile(user):
    if user.role:
        if user.role == "athlete":
            if not user.athlete:
                if user.analyst:
                    delete_profile(AnalystProfile, user)
                if user.coach:
                    delete_profile(CoachProfile, user)
                AthleteProfile.objects.create(user=user)
                return

        elif user.role == "coach":
            if not user.coach:
                if user.athlete:
                    delete_profile(AthleteProfile, user)
                if user.analyst:
                    delete_profile(AnalystProfile, user)
                CoachProfile.objects.create(user=user)
                return
        elif user.role == "analyst":
            if not user.analyst:
                if user.athlete:
                    delete_profile(AthleteProfile, user)
                if user.coach:
                    delete_profile(CoachProfile, user)
                AnalystProfile.objects.create(user=user)
            return
    