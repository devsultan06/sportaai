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
    ROLES_CHOICES = [
        ("athlete", "Athlete"),
        ("coach", "Coach"),
        ("analyst", "Analyst"),
    ]

    username = None
    email = models.EmailField(unique=True)
    first_name = None
    last_name = None
    full_name = models.CharField(max_length=350)
    avatar = models.ImageField(upload_to=rename_avatar, blank=True)
    role = models.CharField(max_length=10, choices=ROLES_CHOICES, blank=True)
    sport = models.CharField(max_length=100, blank=True)

    objects = SportaUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []


class Team(models.Model):
    name = models.CharField(max_length=30)
    year_founded = models.DateField()
    stadium = models.CharField(max_length=30)
    formation = models.CharField(max_length=10)
    
    def __str__(self):
        return self.name


class AthleteProfile(models.Model):
    user = models.ForeignKey(SportaUser, on_delete=models.CASCADE)
    age = models.IntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    nickname = models.CharField(max_length=30, blank=True)
    position = models.CharField(max_length=10)
    team = models.ForeignKey(Team, on_delete=models.SET_DEFAULT, default="")
    jersey_no = models.IntegerField()
    nationality = models.CharField(max_length=30)
    
    def __str__(self):
        return self.user.full_name

    class Meta:
        default_related_name = "athletes"

class CoachProfile(models.Model):
    user = models.ForeignKey(SportaUser, on_delete=models.CASCADE)
    age = models.IntegerField()
    years_of_experience = models.IntegerField()
    coaching_style = models.CharField(max_length=30)
    team = models.ForeignKey(Team, on_delete=models.SET_DEFAULT, default="")
    
    def __str__(self):
        return self.user.full_name
    
    class Meta:
        default_related_name = "coach"

class AnalystProfile(models.Model):
    user = models.ForeignKey(SportaUser, on_delete=models.CASCADE)
    age = models.IntegerField()
    years_of_experience = models.IntegerField()
    specialization = models.CharField(blank=True, max_length=50)


class Match(models.Model):
    home_team = models.ForeignKey(Team, on_delete=models.CASCADE)
    away_team = models.ForeignKey(Team, on_delete=models.CASCADE)
    home_team_score = models.IntegerField()
    away_team_score = models.IntegerField()
    is_live = models.BooleanField()
    match_type = models.CharField(max_length=30)
    stadium = models.CharField(max_length=30)
    date = models.DateTimeField()
    
    def __str__(self):
        return f"{self.home_team.name} vs {self.away_team.name}"
    
    class Meta:
        default_related_name = "matches"

class Timestamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract = True
        
class AthleteMatch(Timestamp):
    athlete = models.ForeignKey(AthleteProfile, on_delete=models.CASCADE)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)

class PerformanceRecord(AthleteMatch):
    metric_type = models.CharField(max_length=30)#e.g Speed, distance_covered e.t.c
    value = models.FloatField()
    
    def __str__(self):
        detail =  f"{self.athlete.user.full_name} {self.metric_type} in {self.match.home_team} vs {self.match.away_team}"
        return detail
    
    class Meta:
        default_related_name = "performance"
    
class Card(AthleteMatch):
    CARD_TYPE = [   
         ("yellow", "yellow card"),
         ("red", "red card")
     ]
    type = models.CharField(max_length=20, choices=CARD_TYPE)
    
    def __str__(self):
        return f"{self.athlete.full_name} card"
    
    class Meta:
        default_related_name = "cards"
    
class MatchPerformance(AthleteMatch):
    performance_record = models.ForeignKey(PerformanceRecord, on_delete=models.CASCADE)
    cards = models.ForeignKey(Card, on_delete=models.CASCADE)
    energy_level = models.FloatField()
    heat_map = models.IntegerField()                                                                                             
    #pass accuracy will be calculated on the flow with Pass
