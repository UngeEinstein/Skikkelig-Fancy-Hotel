from django.contrib import admin
from .models import Booking


class BookingAdmin(admin.ModelAdmin):
    list_display = ('name','email', 'fromDate', 'toDate', 'timestamp', 'roomnr')



admin.site.register(Booking, BookingAdmin)

admin.site.site_header = "Skikkelig Fancy Hotell Admin"


# Register your models here.
