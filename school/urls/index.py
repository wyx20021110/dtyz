from django.urls import path, include
from school.views.index import index

urlpatterns = [
    path('', index, name='index'),
    path('nav/', include('school.urls.nav.nav')),
]
