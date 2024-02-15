""" This module describes the default Router used by our API"""
from rest_framework import routers
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from .views import CategoryViewSet, ProfileViewSet, PriceViewSet, ProductViewSet, SupplierViewSet

urlpatterns = [
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
router = routers.SimpleRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'suppliers', SupplierViewSet, basename='supplier')
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'profiles', ProfileViewSet, basename='profile')
router.register(r'prices', PriceViewSet, basename='price')
urlpatterns += router.urls