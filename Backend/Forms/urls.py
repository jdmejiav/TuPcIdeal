from django.urls import path
from .views import Getbasicform,Getintermediateform,Getadvancedform

app_name = 'Forms'

urlpatterns = [
    path('basic/', Getbasicform.as_view(), name="basic"),
    path('intermediate/', Getintermediateform.as_view(), name="intermediate"),
    path('avanzado/', Getadvancedform.as_view(), name="avanzado"),

]