""" 
    This module handles all the serialization for our API
    It serializes the dataase models in our models.py
"""
from dataclasses import fields
from rest_framework import serializers
from webapp.models import Cart, Order, Order_Item,Payment, Price, Product,Shipment, Supplier, Category, Transporter, Wish_list
from account.models import Profile
class SupplierSerializer(serializers.HyperlinkedModelSerializer):
    '''
        This class implements the supplier serializer which
        automatically serializes instances of the Supplier it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields a nd sets up the validation
    '''

    class Meta:
        model = Supplier
        fields = [ 'id', 'name', 'email', 'address', 'phoneNumber']


class CategorySerializer(serializers.ModelSerializer):
    """ 
        This class implements the category serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation

    """
    class Meta:
        model = Category
        fields = '__all__'

class PriceSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the price serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation

    """
    class Meta:
        model = Price
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    """  
        This class implements the product serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation

    """
    class Meta:
        model = Product
        fields = '__all__'

class CartSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the cart serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation

    """
    class Meta:
        model = Cart
        fields = '__all__'

class WishlistSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the wish list serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation


    """
    class Meta:
        model = Wish_list
        fields = '__all__'

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the order serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation


    """
    class Meta:
        model = Order
        fields = '__all__'

class OrderitemSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the order item serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation

    """
    class Meta:
        model = Order_Item
        fields = '__all__'

class PaymentSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the payment item serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation


    """
    class Meta:
        model = Payment
        fields = '__all__'

class TransporterSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the transporter serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation


    """
    class Meta:
        model = Transporter
        fields = '__all__'

class ShipmentSerializer(serializers.HyperlinkedModelSerializer):
    """        
        This class implements the shipment serializer which
        automatically serializes instances of the customer it
        uses HyperLinkedModelSerializer class that automatically identifies
        the fields and sets up the validation


    """
    class Meta:
        model = Shipment
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    """_summary_

    Args:
        serializers (_type_): _description_
    """
    class Meta:
        model  = Profile
        fields = '__all__'