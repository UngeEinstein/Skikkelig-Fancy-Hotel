from django.contrib import admin
from .models import Room


class RoomAdmin(admin.ModelAdmin):
    list_display = ('roomnr', 'name','description', 'beds', 'price', 'balcony', 'jacuzzi', 'minibar', 'oceanView')



admin.site.register(Room, RoomAdmin)

admin.site.site_header = "Skikkelig Fancy Hotell Admin"


# Register your models here.