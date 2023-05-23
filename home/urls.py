from django.urls import path
from home import views

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("about/", views.aboutpage, name="about"),
    path("services/", views.services, name="services"),
    path("coming_soon/", views.coming_soon, name="coming_soon"),
]