from rest_framework import serializers
from .models import RegistroUser

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroUser
        fields = ('correo', 'nombre','apellidos','password')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroUser
        fields = ('id','correo', 'nombre','apellidos','password')