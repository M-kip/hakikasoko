"""This module describes models for the database"""
from django.db import models
from django.contrib import auth
from django.conf import settings
from account.models import Profile

class Supplier(models.Model):
    """
        This class describes the suppier entity, which directly maps to a database
        table.

        Attributes
        ----------
        name: str
            The name of the supplier.
        address: str
            The address of the supplier
        email: str
            The email of the supplier
        phone_number: str
            The phone number of the supplier
    """
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    phoneNumber = models.CharField(max_length=15)
    address = models.CharField(max_length=12)
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Category(models.Model):
    """
        This class describes the category entity that maps 
        directly to a database table

        Attributes
        ----------
        name: str
            Represents the name of the category maps to a column in the db
        description: str
            A short description of the category what is holds
    """

    name = models.CharField(max_length=40)
    description = models.CharField(max_length=40)
    def __str__(self):
        return self.name

class SubCategory(models.Model):
    """
        This class describes the category entity that maps 
        directly to a database table

        Attributes
        ----------
        name: str
            Represents the name of the category maps to a column in the db
        description: str
            A short description of the category what is holds
    """ 
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=40)
    def __str__(self):
        return self.name

class Price(models.Model):
    """
        This class describes the price entity, that directly
        mops to a table in the database, with it's attributes
        being the column in the database.

        Attributes
        ----------
        Stock: int
            This digit represents the current stock
        price: int
            This field holds the price of the product
    """
    stock = models.IntegerField("Stock Levels")
    price = models.IntegerField("Price", unique=False)
    def __str__(self):
        return str(self.price)
       
class Product(models.Model):
    """
        This class describes the Product entity that 
        maps directly to a database table.

        Attributes
        ----------
        serialNumber: int
            Represents the serial number of the product
        description: str
            This string represents a short description of the product
        product_image: image field
            Holds the image of the product
    """
    name = models.CharField(max_length=50)
    productImage = models.ImageField('Product Image', upload_to="images/%Y/%m/%d/")
    productImage1 = models.ImageField('Product Image1', upload_to="images/%Y/%m/%d/", null=True, blank=True)
    productImage2 = models.ImageField('Product Image2', upload_to="images/%Y/%m/%d/", null=True, blank=True)
    productImage3 = models.ImageField('Product Image3', upload_to="images/%Y/%m/%d/", null=True, blank=True)
    productImage4 = models.ImageField('Product Image4', upload_to="images/%Y/%m/%d/", null=True, blank=True)
    serialNumber = models.IntegerField(default=0) 
    description = models.CharField(max_length=256)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subCategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    price = models.OneToOneField(Price, on_delete=models.CASCADE, unique=False)
    
    def __str__(self):
        return self.name
class Cart(models.Model):
    """
        This class describes the cart entity, that directly maps
        to a database tables with it's attributes representing the
        column of the database.

        Attributes
        ----------
        quantity: int
            represents the number of items in the cart
    """
    quantity = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    def __str__(self):
        return self.customer
class Wish_list(models.Model):
    """
        This class describes the wish list entity, the class directly
        maps to the corresponding table in the database with the 
        attributes representing the column of the db table.
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    def __str__(self):
        return self.customer
class Order(models.Model):
    """
        Order class describes the Order entity in a db this
        class directly maps to a database table in the db.

        Attributes
        ----------
        orderDate: Date/Time
            represents the date column in the db
        totalPrice: decimal
            represents the total price of the order
    """
    orderDate = models.DateField(auto_now_add=True)
    totalPrice = models.DecimalField(max_digits=5, decimal_places=3)
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    def __str__(self):
        return self.customer
class Order_Item(models.Model):
    """
        This class describes the order item entity for the database,
        the class directly maps to the database table

        Attributes
        ----------
        Quantity: int
            represents the number of items of the type ordered
        price: decimal
            represents the price of the items
    """
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=5, decimal_places=3)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
class Payment(models.Model):
    """
        This class describes the payment entity, it directly maps
        to a table in the database, the attributes of the class
        represents the columns of the table in db.

        Attributes
        ----------
        payment_date: date
            The date the payment was made.
        payment-method: str
            The method which the payment was made. Example visa, m-pesa.
        amount: decimal
            The total amount payed by the customer.
    """
    paymentDate = models.DateField(auto_now_add=True)
    paymentMethod = models.CharField(max_length=30)
    amount = models.DecimalField(max_digits=5, decimal_places=3)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)

class Transporter(models.Model):
    """
        This class describes the transporter entity that
        maps directly to a database table of the same name,
        whereas the attributes of the class are equivalent to
        the table columns

        Attributes
        ----------
        name: str
            The name of the transporting co
        email: str
            The email of the transporting co
        address: str
            Physical address of the company
        Route: str
            The route the company operates on
        phone-number: str
            Phone number of the company
        
    """
    name = models.CharField(max_length=20)
    email = models.EmailField("Email")
    address = models.CharField(max_length=20)
    phoneNumber = models.CharField(max_length=13)

    def __str__(self):
        return self.name

class Shipment(models.Model):
    """
        This class describes the shipment entity, it directly maps
        to a table in the database the attributes of the class
        represents the column of the table in db.

        Attributes
        ----------
        shipmentDate: Date
            Holds the date in which the shipment was shipped.
        address: str
            Holds the address of the shipment
        city: str
            Holds the name of the city which the product should be delivered
        country: str
            The country which the order is being shipped to
    """

    shipmentDate = models.DateField()
    address = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    country = models.CharField(max_length=20)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    transporter = models.ForeignKey(Transporter, on_delete=models.CASCADE)
