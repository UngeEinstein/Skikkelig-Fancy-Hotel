from django.db import models
from datetime import datetime, date
from rooms.models import Room

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    address = models.CharField(max_length=100)
    phoneNumber = models.PositiveIntegerField()
    zipCode = models.PositiveIntegerField()
    fromDate = models.DateField(auto_now_add=False, auto_now=False, blank=True)
    toDate = models.DateField(auto_now_add=False, auto_now=False, blank=True)
    timestamp = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    roomnr = models.PositiveIntegerField()
     
# Create your models here.
