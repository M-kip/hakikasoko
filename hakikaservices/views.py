from django.shortcuts import render
from django.views.generic import ListView
from .models import Services
# Create your views here.
class servicesView(ListView):
    template_name = 'hakikaservices/services.html'
    context_object_name = 'services'
    model = Services