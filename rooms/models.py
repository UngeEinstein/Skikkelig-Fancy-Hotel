from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=100)
    beds = models.PositiveIntegerField(default=2)
    quality = models.CharField(max_length=20, default='vanlig')
    balcony = models.BooleanField(default=False)
    breakfast = models.BooleanField(default=False)
    roomnr = models.PositiveIntegerField(unique = True)
    jacuzzi = models.BooleanField(default=False)
    minibar = models.BooleanField(default=False)
    oceanView = models.BooleanField(default=False)
    description = models.TextField(max_length=500)
    size = models.PositiveIntegerField(default=16)
    price = models.PositiveIntegerField(default=500)
