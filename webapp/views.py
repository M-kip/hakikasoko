from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from .models import Product
from .forms import addProductForm
# Create your views here.

class homePage(TemplateView):
    template_name = "app/app.html"

class addProductsView(LoginRequiredMixin, PermissionRequiredMixin, CreateView):
    '''This views adds products to the products table'''
    template_name = "addProduct.html"
    model = Product
    form_class = addProductForm
    permission_required = ["webapp.add_product"]
    permission_denied_message = "You don't have the necessary level of access required to add products"

    def form_valid(self, form: BaseModelForm) -> HttpResponse:
        return super().form_valid(form)

class servicesView(TemplateView):
    template_name = 'services.html'
    