from django.shortcuts import render


def about(request):
    return render(request, 'nav.about.html')


def news(request):
    return render(request, news.html)
