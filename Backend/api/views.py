from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CreateUserSerializer, UserSerializer
from .models import RegistroUser
from .encrypter import encripter, checker
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class RegistrerUser(APIView):
    serializer_class = CreateUserSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            correo = serializer.data.get('correo')
            nombre = serializer.data.get('nombre')
            apellidos = serializer.data.get('apellidos')
            password = encripter(serializer.data.get('password'))
            if RegistroUser.objects.filter(correo=correo).exists():
                return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                registroUser = RegistroUser(correo= correo,nombre=nombre,apellidos=apellidos, password=password)
                registroUser.save()
                return Response(CreateUserSerializer(registroUser).data, status=status.HTTP_201_CREATED)

class GetUser(APIView):
    serializer_class = UserSerializer
    lookup_url_kwarg = 'mail'
    def get(self, request, format=None):
        correo = request.GET.get(self.lookup_url_kwarg)
        if correo != None:
            registroUser = RegistroUser.objects.filter(correo=correo)
            if len(registroUser) > 0:
                data = UserSerializer(registroUser[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'User Not found': 'Invalid email Code.'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)