from django.apps import AppConfig
from django.db.models.signals import post_migrate


class NewsletterConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "newsletter"

    def ready(self):
        import newsletter.signals
