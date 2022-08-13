from django.urls import path
from school.views.nav.nav import about, news

urlpatterns = [
    path('about/', about, name='about'),
    path('news/', news, name="news"),
]
