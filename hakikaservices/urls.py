from django.urls import path
from .views import servicesView

app_name = 'hakikaservices'
urlpatterns = [
    path("hakikadigital/", servicesView.as_view(), name="services"),
]