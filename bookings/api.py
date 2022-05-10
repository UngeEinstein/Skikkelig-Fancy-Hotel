from bookings.models import Booking
from rest_framework import viewsets, permissions
from .serializers import BookingSerializer
from .sendmail import mail_send_booking_receipt

from rest_framework import generics, permissions
from rest_framework.response import Response


#Booking viewset

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BookingSerializer
    def create(self, request):
        print("hello")
        mail_send_booking_receipt(request.data["email"], request.data["name"], "", request.data["fromDate"], request.data["toDate"], "roomtype", "persons", "rmail_send_booking_receipteservation_number", "extra")
        return Response({
            "email":request.data["email"],
            "name": request.data["name"],
            "fromDate": request.data["fromDate"],
            "toDate": request.data["toDate"]
        })

    