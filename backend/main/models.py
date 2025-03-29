from django.db import models

class Athletes(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    sport = models.CharField(max_length=100)    


    