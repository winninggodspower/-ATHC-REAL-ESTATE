from django.db.models.signals import post_save
from .models import NewsLetterEmail
from django.dispatch import receiver
from django.conf import settings
from django.core.mail import send_mail

print(settings.DEBUG)

@receiver(post_save, sender=NewsLetterEmail)
def send_confirmation_email(sender, instance, created, **kwargs):
    if created:
        email = instance.email
        subject = 'NewsLetter Subscription'
        message = 'Hello ' + email + ', \n Thanks for subscribing us. You will get notification of latest articles posted on our website. Please do not reply on this email.'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email, ]
        send_mail(subject, message, email_from, recipient_list)
        return