from django.http import HttpResponse

def common_index(request):
    return HttpResponse("Test of the HTTP request")