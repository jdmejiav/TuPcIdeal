from django.shortcuts import render
from rest_framework.response import Response
from .serializers import BasicFormSerializer,IntermediateFormSerializer,AdvancedFormSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .Data_analysis import WebScraping as WS
from .Data_analysis import FormI as FI
from .Data_analysis import Recomendersys as RDS
import pandas as pd
# Create your views here.

class Getbasicform(APIView):
    serializer_class = BasicFormSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():

            data = serializer.data
            presupuesto =  data.get('Presupuesto').lower()
            tipo = data.get('Tipo')
            marca = data.get('Marca')
            usos = data.get('Usos')
            pantalla = data.get('Pantalla')
            Info = FI.FormBasic(presupuesto,tipo,marca,usos,pantalla)
            print(data)
            Results = RDS.analyze_data(Info)
            RecoF = WS.processreco(Results,Info,0)
            return Response(RecoF, status=status.HTTP_201_CREATED)      
        else:
            print(serializer)  
            return Response({'Bad Request':'Invalid basic form data...'}, status=status.HTTP_400_BAD_REQUEST)
           
class Getintermediateform(APIView):
    serializer_class = IntermediateFormSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            import time

            start = time.time()

            data = serializer.data
            presupuesto =  data.get('Presupuesto').lower()
            tipo = data.get('Tipo')
            marca = data.get('Marca')
            usos = data.get('Usos')
            memoria = data.get('Memoria')
            solido = data.get('Solido')
            pantalla = data.get('Pantalla')
            Info = FI.FormIntermediate(presupuesto,tipo,marca,usos,memoria,solido,pantalla)
            print(data)
            Results = RDS.analyze_data(Info)
            RecoF = WS.processreco(Results,Info,1)

            end = time.time()
            print(end - start)
            return Response(RecoF, status=status.HTTP_201_CREATED)      
        else:
            print(serializer)  
            return Response({'Bad Request':'Invalid intermediate form data...'}, status=status.HTTP_400_BAD_REQUEST)
           
class Getadvancedform(APIView):
    serializer_class = AdvancedFormSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            data = serializer.data
            presupuesto =  data.get('Presupuesto').lower()
            tipo = data.get('Tipo')
            marca = data.get('Marca')
            usos = data.get('Usos')
            memoria = data.get('Memoria')
            solido = data.get('Solido')
            almacenamiento = data.get('Almacenamiento')
            pantalla = data.get('Pantalla')
            gama = data.get('Gama')
            Info = FI.FormAdvanced(presupuesto,tipo,marca,usos,memoria,solido,almacenamiento,pantalla,gama)            
            Results = RDS.analyze_data(Info)
            RecoF = WS.processreco(Results,Info,2)
            return Response(RecoF, status=status.HTTP_201_CREATED)      
        else:
            print(serializer)  
            return Response({'Bad Request':'Invalid advanced form data...'}, status=status.HTTP_400_BAD_REQUEST)
           