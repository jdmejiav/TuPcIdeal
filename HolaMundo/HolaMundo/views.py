from django.http import HttpResponse

def  saludo(request):
    return HttpResponse("Hola Mundo")

def adios(request):
    return HttpResponse("Adios mundo")