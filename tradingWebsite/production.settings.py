import os
from .common_settings import *

DEBUG = False
assert SECRET_KEY is not None, ('please provide DJANGO_SECRET_KEY'
                                'environment variable with value')
ALLOWED_HOSTS += [
    os.getenv('DJANGO_ALLOWED_HOSTS'),
]