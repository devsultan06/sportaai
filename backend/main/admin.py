from django.contrib import admin
from .models import SportaUser, AthleteProfile, CoachProfile, AnalystProfile

admin.site.register(SportaUser)
admin.site.register(AthleteProfile)
admin.site.register(CoachProfile)
admin.site.register(AnalystProfile)