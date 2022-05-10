from django.db import models

from django.conf import settings
from django.db import models
from django.utils import timezone

class Rooms(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phonenr = models.PositiveIntegerField()
    created_date = models.DateTimeField(default=timezone.now)

# Create your models here.
