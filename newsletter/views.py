from django.shortcuts import render, redirect

from django.http import JsonResponse
import re
from .models import NewsLetterEmail

from django.conf import settings

# Create your views here.
def subscribe_email_to_newsletter(request):
    if request.method == 'POST':
        post_data = request.POST.copy()
        email = post_data.get("email", None)

        is_valid, res = validate_email(email)

        if is_valid:
            newsLetterEmail = NewsLetterEmail()
            newsLetterEmail.email = email
            newsLetterEmail.save()

            res = JsonResponse({'msg': 'Thanks. Subscribed Successfully!'})            
            return res
        
    return redirect("/")


def validate_email_endpoint(request): 
    email = request.POST.get("email", None)   
    is_valid, res = validate_email(email)

    res = JsonResponse({'msg': res, 'is_valid': is_valid})
    return res
    
def validate_email(email) -> tuple:
    is_valid = True

    if email is None:
        res ='Email is required.'
        is_valid = False
    elif NewsLetterEmail.objects.filter(email = email):
        res = 'Email Address already exists'
        is_valid = False
    elif not re.match(r"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", email):
        res = 'Invalid Email Address'
        is_valid = False
    else:
        res =  ''

    return is_valid, res