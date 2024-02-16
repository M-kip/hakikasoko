import os
from .common_settings import *

DEBUG = False
DJANGO_VITE = {
    "default": {
        "dev_mode": DEBUG
    }
}
#assert SECRET_KEY is not None, ('please provide DJANGO_SECRET_KEY'
                                #'environment variable with value')
SECRET_KEY = 'django-insecure-r3%nj12*$1m&q5qqxky955)txm+i(2f!b%n0e9m!17(m+so&s$'
ALLOWED_HOSTS += [
    os.getenv('DJANGO_ALLOWED_HOSTS'),
]