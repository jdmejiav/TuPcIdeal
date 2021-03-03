from django.db import models

# Create your models here.

class RegistroUser(models.Model):
    correo= models.CharField(max_length=60, unique=True)
    nombre= models.CharField(max_length=60, unique=False)
    apellidos= models.CharField(max_length=80, unique=False)
    password= models.CharField(max_length=80, unique=False)