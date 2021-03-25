from rest_framework import serializers

class BasicFormSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   Presupuesto = serializers.CharField()
   Tipo = serializers.CharField()
   Marca = serializers.ListField()
   Usos = serializers.ListField()