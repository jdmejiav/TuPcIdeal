from django.db import models

# Create your models here.
class Recomendations(models.Model):
    CPU= models.CharField(max_length=80, unique=False)
    GPU= models.CharField(max_length=80, unique=False)
    RAM= models.CharField(max_length=20, unique=False)
    SSD= models.BooleanField(unique=False)
    HDD= models.BooleanField(unique=False)
    CAPACIDAD= models.CharField(max_length=20, unique=False)
    SELECCION= models.CharField(max_length=80, unique=False)
    PRESUPUESTO= models.CharField(max_length=255, unique=False)