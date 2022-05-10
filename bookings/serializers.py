from rest_framework import serializers
from bookings.models import Booking 

#Booking serializer
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'