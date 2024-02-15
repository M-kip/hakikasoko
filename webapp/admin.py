"""This module represents the admin interface link for the database models"""
from django.contrib import admin

# Register your models here.
from .models import Product, Supplier, Cart, Price,  Order, Order_Item, Payment, Shipment, Wish_list, Category,SubCategory

class ProductInline(admin.StackedInline):
    model = Product
    extra = 3
class SupplierInline(admin.ModelAdmin):
    inlines = [ProductInline]
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name","description", "supplier", "category", "price")

admin.site.register(Supplier, SupplierInline)
admin.site.register(Cart)
admin.site.register(Price)
admin.site.register(Product, ProductAdmin)
admin.site.register(SubCategory)
admin.site.register(Order)
admin.site.register(Order_Item)
admin.site.register(Payment)
admin.site.register(Shipment)
admin.site.register(Wish_list)
admin.site.register(Category)