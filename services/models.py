from django.db import models

# Create your models here.

class Land(models.Model):
    title = models.CharField( max_length=35)
    location = models.CharField(max_length=100)

    price = models.PositiveIntegerField()
    per_sqr_meters = models.PositiveIntegerField()

    land_image = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True, related_name="land_image")
    layout_image = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True, related_name="layout_image")

    def __str__(self) -> str:
        return self.title

class Testimonial(models.Model):
    name = models.CharField( max_length=50)
    review = models.TextField()
    user_image = models.ForeignKey('wagtailimages.Image', on_delete=models.SET_NULL, null=True)