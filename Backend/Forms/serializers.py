from rest_framework import serializers

class BasicFormSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   Presupuesto = serializers.CharField()
   Tipo = serializers.CharField()
   Marca = serializers.ListField()
   Usos = serializers.ListField()
   Pantalla = serializers.CharField()

class IntermediateFormSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   Presupuesto = serializers.CharField()
   Tipo = serializers.CharField()
   Marca = serializers.ListField()
   Usos = serializers.ListField()
   Memoria = serializers.CharField()
   Solido = serializers.CharField()
   Pantalla = serializers.CharField()

class AdvancedFormSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   Presupuesto = serializers.CharField()
   Tipo = serializers.CharField()
   Marca = serializers.ListField()
   Usos = serializers.ListField()
   Memoria = serializers.CharField()
   Solido = serializers.CharField()
   Almacenamiento = serializers.CharField()
   Pantalla = serializers.CharField()
   Gama = serializers.CharField()