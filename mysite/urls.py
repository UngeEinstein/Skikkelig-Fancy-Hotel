from django.contrib import admin
from django.urls import path, include

urlpatterns = [
   
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('rooms.urls')),
    path ('', include('bookings.urls')),
    path('', include('user.urls')), 
    path('', include('accounts.urls'))

]


