from django.contrib import admin

from Forms.models import Recomendations
# Register your models here.

@admin.register(Recomendations)
class Recomendations(admin.ModelAdmin):
    list_display = ('CPU','GPU','RAM','SSD','HDD','CAPACIDAD','SELECCION','PRESUPUESTO')