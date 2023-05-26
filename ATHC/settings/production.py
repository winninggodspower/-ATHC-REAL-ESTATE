from .base import *

ALLOWED_HOSTS = ["https://www.adeyemitosinhome.com", "https://adeyemitosinhome.com", "adeyemitosinhome.com"]

DEBUG = False

try:
    from .local import *
except ImportError:
    pass
