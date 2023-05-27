from .base import *

ALLOWED_HOSTS = ["www.adeyemitosinhome.com", "adeyemitosinhome.com", "localhost"]

DEBUG = False

try:
    from .local import *
except ImportError:
    pass
