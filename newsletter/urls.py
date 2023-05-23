from django.urls import path
from .views import subscribe_email_to_newsletter, validate_email_endpoint

urlpatterns = [
    path("subscribe", subscribe_email_to_newsletter),
    path("validate_email", validate_email_endpoint),
]
