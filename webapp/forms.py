from django import forms
from .models import Product
class addProductForm(forms.ModelForm):
    '''Maps directly to the underlying table'''

    class Meta:
        model = Product
        exclude = ['id']