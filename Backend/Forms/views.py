from django.shortcuts import render
from rest_framework.response import Response
from .serializers import BasicFormSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .Data_analysis import WebScraping as WS
# Create your views here.

class Getbasicform(APIView):
    serializer_class = BasicFormSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            WS.Ktronix()
            return Response("Valid data :)", status=status.HTTP_201_CREATED)      
        else:
            print(serializer)  
            return Response({'Bad Request':'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
           