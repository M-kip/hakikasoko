from django.contrib import admin
from .models import Services
# Register your models here.

@admin.register(Services)
class ServicesAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'serviceImage')