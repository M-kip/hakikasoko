'''Account urls for authentication'''
from django.urls import path, include
from .views import RegisterUser, ProfileView, ProfileUpdateView

app_name = 'auth'
urlpatterns = [
    path('signup/', RegisterUser.as_view(), name='signup'),
    path('profile/<int:pk>/', ProfileView.as_view(), name='profile'),
    path('profile/edit/<int:pk>/', ProfileUpdateView.as_view(), name='profileEdit'),
    path('', include("django.contrib.auth.urls"))
]