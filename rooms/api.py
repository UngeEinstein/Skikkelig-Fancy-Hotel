from rooms.models import Room
from rest_framework import viewsets, permissions
from .serializers import RoomSerializer

# Room Viewset
class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all().filter(breakfast=False)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoomSerializer
