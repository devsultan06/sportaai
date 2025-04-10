import os
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# from django.contrib.contenttypes.models import ContentType
# from django.contrib.contenttypes.fields import GenericForeignKey
from .utils import rename_avatar


class SportaUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("User must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
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
    year_founded = models.IntegerField()
    logo = models.ImageField(upload_to="Team/", blank=True)
    home_stadium = models.CharField(max_length=30)
    formation = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class AthleteProfile(models.Model):
    user = models.OneToOneField(
        SportaUser, on_delete=models.CASCADE, related_name="athlete"
    )
    age = models.IntegerField(blank=True, null=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    nickname = models.CharField(max_length=30, blank=True)
    position = models.CharField(max_length=10, blank=True)
    team = models.ForeignKey(
        Team,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    jersey_no = models.IntegerField(blank=True, null=True)
    nationality = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.user.full_name


class CoachProfile(models.Model):
    user = models.OneToOneField(SportaUser, on_delete=models.CASCADE)
    age = models.IntegerField(null=True, blank=True)
    years_of_experience = models.IntegerField(null=True, blank=True)
    coaching_style = models.CharField(max_length=30, blank=True)
    team = models.ForeignKey(
        Team,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.user.full_name

    class Meta:
        default_related_name = "coach"


class AnalystProfile(models.Model):
    user = models.OneToOneField(
        SportaUser,
        on_delete=models.CASCADE,
        related_name="analyst",
    )
    age = models.IntegerField(null=True, blank=True)
    years_of_experience = models.IntegerField(null=True, blank=True)
    specialization = models.CharField(blank=True, max_length=50)

    def __str__(self):
        return self.user.full_name


class Match(models.Model):
    MATCH_STATUS_CHOICES = choices = [
        ("live", "Live"),
        ("finished", "Finished"),
        ("upcoming", "Upcoming"),
    ]
    home_team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name="home_matches",
    )
    away_team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name="away_matches",
    )
    home_team_score = models.IntegerField()
    away_team_score = models.IntegerField()
    status = models.CharField(max_length=20, choices=MATCH_STATUS_CHOICES)
    match_type = models.CharField(max_length=30)
    stadium = models.CharField(max_length=30)
    date = models.DateTimeField()

    def __str__(self):
        return f"{self.home_team.name} vs {self.away_team.name}"


class Timestamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True


class AthleteMatch(Timestamp):
    athlete = models.ForeignKey(AthleteProfile, on_delete=models.CASCADE)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)

    class Meta:
        abstract = True
        unique_together = ("athlete", "match")


class MatchPerformance(AthleteMatch):
    pass
    # pass accuracy will be calculated on the flow with Pass


class PerformanceRecord(AthleteMatch):
    metric_type = models.CharField(max_length=30)  # e.g Speed, distance_covered e.t.c
    value = models.FloatField()
    performance_record = models.ForeignKey(MatchPerformance, on_delete=models.CASCADE)

    def __str__(self):
        detail = f"{self.athlete.user.full_name} {self.metric_type} in {self.match.home_team} vs {self.match.away_team}"
        return detail

    class Meta:
        default_related_name = "performances"


class Pass(AthleteMatch):
    is_completed = models.BooleanField()

    def __str__(self):
        return f"{self.athlete.user.full_name} made a pass"

    class Meta:
        default_related_name = "passes"


class Card(AthleteMatch):
    CARD_TYPE = [("yellow", "Yellow card"), ("red", "Red card")]
    card_type = models.CharField(max_length=20, choices=CARD_TYPE)
    match = models.ForeignKey(MatchPerformance, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.athlete.user.full_name} {self.card_type} card"

    class Meta:
        default_related_name = "cards"


class Injury(AthleteMatch):
    SEVERITY_CHOICES = [
        ("low", "Low"),
        ("medium", "Medium"),
        ("high", "High"),
    ]
    description = models.TextField()
    severity = models.CharField(max_length=20, choices=SEVERITY_CHOICES)
    recovery_time = models.IntegerField(null=True, blank=True)  # In days

    def __str__(self):
        return f"{self.athlete.user.full_name} injury"

    class Meta:
        default_related_name = "injuries"


class Insight(AthleteMatch):
    title = models.CharField(max_length=100)
    description = models.TextField()
    insight_type = models.CharField(max_length=30)

    def __str__(self):
        return self.title

    class Meta:
        default_related_name = "insights"


class TrainingSession(Timestamp):
    PERIOD_CHOICES = [
        ("daily", "daily"),
        ("weekly", "weekly"),
        ("monthly", "monthly"),
    ]
    INTENSITY_CHOICES = [("high", "High"), ("mid", "Medium"), ("low", "Low")]
    athlete = models.ForeignKey(
        AthleteProfile,
        on_delete=models.CASCADE,
        related_name="training_sessions",
    )
    activity = models.CharField(max_length=150)
    period = models.CharField(max_length=20, choices=PERIOD_CHOICES)
    duration = models.TimeField()
    intensity = models.CharField(max_length=10, choices=INTENSITY_CHOICES)

    def __str__(self):
        return f"{self.activity} for {self.athlete.user.full_name}"


class Device(models.Model):
    user = models.ForeignKey(
        AthleteProfile,
        on_delete=models.CASCADE,
        related_name="devices",
    )
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=False)
    last_sync = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        unique_together = ("user", "name")


class ChatSession(models.Model):
    user = models.ForeignKey(
        SportaUser,
        on_delete=models.CASCADE,
        related_name="chat_sessions",
    )
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)
    topic = models.CharField(max_length=100)

    def __str__(self):
        return self.topic


class Message(Timestamp):
    sender = models.ForeignKey(
        SportaUser,
        on_delete=models.CASCADE,
        related_name="messages",
    )
    chat_session = models.ForeignKey(
        ChatSession,
        on_delete=models.CASCADE,
        related_name="messages",
    )
    text = models.TextField()

    def __str__(self):
        return f"message from {self.sender.full_name}"


class Alert(Timestamp):
    CATEGORIES = [
        ("injury_risk", "Injury Risk"),
        ("system_update", "System Update"),
        ("performance_trend", "Performance Trend"),
    ]
    message = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORIES)

    def __str__(self):
        return self.message


class AlertInteraction(Timestamp):
    alert = models.ForeignKey(
        Alert,
        models.CASCADE,
        related_name="interacitons",
    )
    user = models.ForeignKey(SportaUser, models.CASCADE)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.full_name} - {self.alert.message}"
