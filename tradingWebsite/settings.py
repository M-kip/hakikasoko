import os
from .common_settings import *

DEBUG = False
DJANGO_VITE_DEV_MODE = False
assert SECRET_KEY is not None, ('please provide DJANGO_SECRET_KEY'
                                'environment variable with value')
ALLOWED_HOSTS += [
    os.getenv('DJANGO_ALLOWED_HOSTS'),
]