from .base import *

ALLOWED_HOSTS = ["https://www.adeyemitosinhome.com", "https://adeyemitosinhome.com", "adeyemitosinhome.com", "127.0.0.1"]

DEBUG = False

try:
    from .local import *
except ImportError:
    pass
