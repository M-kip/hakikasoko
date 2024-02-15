'''
  urls file, this file hosts the urls config files
'''
from django.urls import path
from .views import homePage, addProductsView

app_name = 'hakikasoko'
urlpatterns = [
    path("", homePage.as_view(), name="Home-page"),
    path("addProduct/", addProductsView.as_view(), name="addProduct"),
    path("<path:path>/", homePage.as_view(), name="Home-page-with-path"),
]