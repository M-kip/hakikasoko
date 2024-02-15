from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CategorySerializer, ProfileSerializer, PriceSerializer, ProductSerializer, SupplierSerializer
from webapp.models import Category, Product, Supplier,  Price
from account.models import Profile

class ProductViewSet(viewsets.ModelViewSet):
    """
        A view set for viewing and editing product
    """

    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()

class SupplierViewSet(viewsets.ModelViewSet):
    """
        This class describes the Supplier view set class it allows 
        us to perform, create, list, retrive and many other actions
        related to Supplier
    """
    serializer_class = SupplierSerializer

    def get_queryset(self):
        return Supplier.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    """ 
        This class maps the underlying database table, it
        allow the user the update, retive and destory Category objects.
    """
    serializer_class = CategorySerializer

    def get_queryset(self):
        """ This method retrives the queryset that will be used by
            by the class

        Returns:
            list: returns a list of tuples each representing and instance of the db table
        """
        return Category.objects.all()

    
class PriceViewSet(viewsets.ModelViewSet):
    """ 
        This class describes the Retailer db table it offers
        an interface that allows us to perform retrive, update, and destory actions.    
    """
    serializer_class = PriceSerializer

    def get_queryset(self):
        """ This method retrives the queryset that will be used by
            by the class

        Returns:
            list: returns a list of tuples each representing and instance of the db table
        """
        return Price.objects.all()

class ProfileViewSet(viewsets.ModelViewSet):
    """This class details the Account model that directly maps to the users
        profile
    Args:
        viewsets (_type_): _description_
    """
    serializer_class = ProfileSerializer

    def get_queryset(self):
        """ This method retrives the queryset that will be used by
            by the class

        Returns:
            list: returns a list of tuples each representing and instance of the db table
        """
        return Profile.objects.all()