from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from blog.models import BlogPage

class StaticViewSitemap(Sitemap):
    def items(self):
        return ['about', 'homepage']
    def location(self, item):
        return reverse(item)

class BlogSitemap(Sitemap):

    def items(self):
        return BlogPage.objects.all()

    def lastmod(self, obj):
        return obj.date

class ServiceSiteMap(Sitemap):
    priority = 0.9

    def items(self):
        return ['services']
    
    def location(self, item):
        return reverse(item)