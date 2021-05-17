from datetime import datetime
from .Falabella import falabella
import pandas as pd
import json

ResultadosPortatil = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
ResultadosDesk = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
Activated = False

def startServ():
    print("Searching products on falabella.com")
    global Activated
    global ResultadosPortatil
    global ResultadosDesk
    Activated = False
    Resultados1 = falabella(0)
    Resultados2 = falabella(1)
    if Resultados1.empty:
        print("null")
    else:
        ResultadosPortatil = Resultados1
        del Resultados1
    if Resultados2.empty:
        print("null")
    else:
        ResultadosDesk = Resultados2
        del Resultados2
    Activated = True
    print("Complete")

def processreco(recos,self,typeform:int):
    if Activated:
        RAM =''
        SSD =''
        CAPACIDAD=''
        Pantalla = self.pantalla

        TIPO={
            "Portatil":0,
            "Escritorio":1,
            "All in one":2
        }

        Tamano={
            "Grande":[15,16],
            "Equilibrado":[13.6,14.9],
            "Pequeño":[12,13.5]
        }

        TamanoM={
            "Grande":[23,30],
            "Equilibrado":[19,22],
            "Pequeño":[18,19]
        }

        presupuesto={
            "bajo":[1000000,1500000],
            "moderado":[1500000,2200000],
            "alto":[2200000]
        }
        Pantalla1 = Tamano[Pantalla]
        Pantalla2 = TamanoM[Pantalla]
        TipoPc = TIPO[self.tipo]
        print(TipoPc)

        if typeform == 1 or typeform == 2:
            RAM = self.memoria
            SSD = self.solido
            if SSD == "Si":
                SSD = True
            else:
                SSD = False
        
        Resultados = pd.DataFrame(columns=['urli','CPU','RAM','Spantalla','HDD','SSD','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','Marca','Tipo'])
        
        if typeform == 2:
            CAPACIDAD = self.almacenamiento
        if TipoPc == 0:
            global ResultadosPortatil       
            Resultados = ResultadosPortatil  
        if TipoPc == 1 or TipoPc == 2:
            global ResultadosDesk       
            Resultados = ResultadosDesk 

        Recomendaciones = pd.DataFrame(columns=['urli','CPU','RAM','Spantalla','HDD','SSD','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','Marca','Tipo'])

        if TipoPc == 2:
            Resultados = Resultados.loc[Resultados['Tipo'].isin(["all in one"])]
        elif TipoPc == 1:
            Resultados = Resultados.loc[Resultados['Tipo'].isin(["computadores de escritorio"])]

        for values in recos.index:
            Cpu = recos['CPU'][values]
            Gpu = recos['GPU'][values]
            Ram = recos['RAM'][values]
            Ssd = recos['SSD'][values]
            Ram = Ram.replace(' gb','gb')
            if RAM != 'otro' and RAM !='':
                print("RAM:",RAM,"Ram:",Ram)
                Ram = RAM
                Ram = Ram.replace('GB','gb')
                print("entre")

            ''' fix
            if SSD != '':
                Ssd = SSD
            '''
            print(Cpu)
            print(Gpu)
            print(Ssd,SSD)
            print(Ram)

            RecoF = Resultados.loc[Resultados['CPU'].isin([Cpu])]
            if TipoPc == 0:
                RecoF = RecoF.loc[RecoF['RAM'].isin([Ram])& ((RecoF['Spantalla']>=Pantalla1[0])&(RecoF['Spantalla']<=Pantalla1[1]))]
            if TipoPc == 1:
                #RecoF = RecoF.loc[RecoF['RAM'].isin([Ram])]
                RecoF = RecoF.loc[RecoF['RAM'].isin([Ram])]
            if TipoPc == 2:
                #RecoF = RecoF.loc[RecoF['RAM'].isin([Ram]) & ((RecoF['Spantalla']>=Pantalla2[0])&(RecoF['Spantalla']<=Pantalla2[1]))]
                RecoF = RecoF.loc[RecoF['RAM'].isin([Ram])]
            if Gpu == "nvidia/radeon":
                RecoF = RecoF.loc[RecoF['Capacidad de la tarjeta de video']!=False]
            else:
                RecoF = RecoF.loc[RecoF['Capacidad de la tarjeta de video']==False]

            if not RecoF.empty:
                Recomendaciones = Recomendaciones.append(RecoF, ignore_index=True)
            else:
                print("Sorry but we can't found any pc on internet")

        Recomendaciones=Recomendaciones.drop_duplicates()
        Precios = self.presupuesto
        Rango = presupuesto[Precios]
        if Precios=="alto":
            Recomendaciones = Recomendaciones.loc[((Recomendaciones['Precio']>=Rango[0]))]
        else:
            Recomendaciones = Recomendaciones.loc[((Recomendaciones['Precio']>=Rango[0])&(Recomendaciones['Precio']<=Rango[1]))]

        if Recomendaciones.empty:
            jsonf = recos.to_json(orient="records")
            parsed = json.loads(jsonf)
            Recomendaciones= parsed
            print("Vacio")

        elif len(Recomendaciones)>=1:
            jsonf = Recomendaciones.to_json(orient="records")
            parsed = json.loads(jsonf)
            Recomendaciones= parsed

        print(len(Recomendaciones))
        return Recomendaciones
    else:
        jsonf = recos.to_json(orient="records")
        parsed = json.loads(jsonf)
        return parsed