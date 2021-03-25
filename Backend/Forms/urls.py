from django.urls import path
from .views import Getbasicform

app_name = 'Forms'

urlpatterns = [
    path('basic/', Getbasicform.as_view(), name="basic"),
]