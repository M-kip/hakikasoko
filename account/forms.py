from .models import Profile
from django import forms
from django.contrib.auth.models import User
class UserCreationFormCustom(forms.ModelForm):
    '''This class represents the html form that will be rendered upon the user's request'''
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password', widget=forms.PasswordInput)

    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError('Passwords don\'t match')
        return cd['password2']
    
    class Meta:
        model = User
        fields = ('username','first_name', 'last_name', 'email', 'password', 'password2')

class ProfileCreationForm(forms.ModelForm):
    '''This class maps the underlying database table to html input components'''

    class Meta:
        model = Profile
        exclude = ['id', 'user', 'role']

class UserUpdateForm(forms.ModelForm):
    '''This class represents the html form that will be rendered upon the user's request'''
    
    class Meta:
        model = User
        fields = ('username','first_name', 'last_name', 'email',)

class ProfileUpdateForm(forms.ModelForm):
    '''This class maps the underlying database table to html input components'''

    class Meta:
        model = Profile
        exclude = ['id', 'user', 'role']