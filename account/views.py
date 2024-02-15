from typing import Any
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.contrib.auth.models import User
from django.views.generic import DetailView
from django.views.generic.edit import CreateView, UpdateView
from django.urls import reverse_lazy
from .models import Profile
from .forms import ProfileUpdateForm, UserCreationFormCustom, ProfileCreationForm, UserUpdateForm
from webapp.forms import addProductForm
from webapp.models import Product
# Create your views here.

class RegisterUser(CreateView):
    template_name = 'register.html'
    form_class = UserCreationFormCustom
    success_url = reverse_lazy('login')

    def form_valid(self, form):
        '''This method saves the new user'''
        new_user = form.save(commit=False)
        new_user.set_password(form.cleaned_data['password'])
        new_user.save()
        profile = ProfileCreationForm(self.request.POST, self.request.FILES)
        if profile.is_valid():
            profile.save(commit=False)
            profile.instance.user = new_user
            profile.save()
        return redirect('auth:login')
    
    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context['profileForm'] = ProfileCreationForm()
        return context
        



class ProfileView(LoginRequiredMixin, PermissionRequiredMixin, DetailView):
    template_name = 'profile.html'
    model = Profile
    context_object_name = 'profile'
    permission_required = ["account.view_profile",]
    permission_denied_message = "You do not have permission to view this page."

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context =  super().get_context_data(**kwargs)
        context['addProductForm'] = addProductForm()
        # Products add by the instance user
        products = Product.objects.all()
        context['Products'] = products
        return context

class ProfileUpdateView(LoginRequiredMixin, PermissionRequiredMixin, UpdateView):
    '''This class allows the user the edit their profile and user objects'''
    model = Profile
    template_name = 'updateProfile.html'
    form_class = ProfileUpdateForm
    permission_required = ["account.change_profile",]
    permission_denied_message = "You do not have permission to view this page."

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context['userUpdateForm'] = UserUpdateForm(instance=get_object_or_404(User, pk=self.kwargs['pk']))
        return context
    
    def form_valid(self, form: BaseModelForm) -> HttpResponse:
        user_update = UserUpdateForm(self.request.POST)
        if user_update.is_valid():
            user_update.save()
        return super().form_valid(form)

