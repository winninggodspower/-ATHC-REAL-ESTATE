from django.shortcuts import render
from services.models import Land, Testimonial

def homepage(request):
    context={
        "testimonials": Testimonial.objects.all()
    }
    return render(request, "default_routes/index.html", context)

def aboutpage(request):
    return render(request, "default_routes/about.html")

def services(request):
    context={
        "lands": Land.objects.all()
    }
    return render(request, "default_routes/services.html", context)


def coming_soon(request):
    return render(request, "default_routes/comming_soon.html")