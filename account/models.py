from django.db import models
from django.conf import settings
from django.urls import reverse

class Profile(models.Model):
    """
        This class describes the customer entity that 
        maps directly to a database table.

        Attributes
        ----------
        First_name: str
            This string represents the first name of the customer
        Last_name: str
            represents the last name of the customer
        Email: str
            represents the email address of the client
        Address: str
            Holds the customer address
        Phone-number: 
            A placeholder for the customer phone number
    """
    SUPPLIER = 'SUPPLIER'
    CLIENT = 'CLIENT'
    ROLE_CHOICES = [(SUPPLIER, 'Supplier/Partner'), (CLIENT, 'Consumer/Customer'),]
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    userImage = models.ImageField('Profile Image', upload_to="images/%Y/%m/%d/", blank=True, null=True)
    coverImage = models.ImageField('Cover Image', upload_to="images/%Y/%m/%d/", blank=True, null=True)
    phoneNumber = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=30, blank=True, null=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default=CLIENT)
    date_of_birth = models.DateField(null=True, blank=True)

    def __str__(self):
        return str(self.user.username)
    
    def get_absolute_url(self):
        return reverse('auth:profile', kwargs={'pk': self.id})
    
    class Meta:
        ordering = ['user']