
import os
from dotenv import load_dotenv

# load environment variables from .env file
load_dotenv()

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", f"ATHC.settings.{os.getenv('ENVIRONMENT')}")

application = get_wsgi_application()
