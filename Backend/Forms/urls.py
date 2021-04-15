from django.urls import path
from .views import Getbasicform,Getintermediateform

app_name = 'Forms'

urlpatterns = [
    path('basic/', Getbasicform.as_view(), name="basic"),
    path('intermediate/', Getintermediateform.as_view(), name="intermediate"),
]