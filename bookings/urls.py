from rest_framework import routers
from .api import BookingViewSet

router = routers.DefaultRouter()
router.register('api/bookings', BookingViewSet, 'bookings')


urlpatterns = router.urls