from django.urls import path
from .views import RegistrerUser, GetUser

urlpatterns = [
    path('createU', RegistrerUser.as_view()),
    path('SchU', GetUser.as_view()),
]