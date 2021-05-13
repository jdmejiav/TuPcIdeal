from datetime import datetime
from .Falabella import falabella
import pandas as pd
import json

ResultadosPortatil = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
ResultadosDesk = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
Activated = False

def startServ():
    print("Searching products on falabella.com")
    global Activated
    global ResultadosPortatil
    global ResultadosDesk
    Activated = False
    ResultadosPortatil = falabella(0)
    Activated = True

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
            "Equilibrado":[13,14.9],
            "Pequeño":[12,13.5]
        }

        TamanoM={
            "Grande":[23,30],
            "Equilibrado":[19,22],
            "Pequeño":[18,19]
        }

        presupuesto={
            "Bajo":[1000000,1500000],
            "Moderado":[1500000,2200000],
            "Alto":[2200000]
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

        if typeform == 2:
            CAPACIDAD = self.almacenamiento
        Resultados = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
        if TipoPc == 0:
            global ResultadosPortatil       
            Resultados = ResultadosPortatil  
            print("azasdasdsa")

        Recomendaciones = pd.DataFrame(columns=['urli','CPU','RAM','Spantalla','HDD','SSD','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','Marca','Tipo'])

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
            if RAM != 'otro':
                Ram = RAM
                Ram = Ram.replace('GB','gb')

            ''' fix
            if SSD != '':
                Ssd = SSD
            '''
            print(Cpu)
            print(Gpu)
            print(Ssd,SSD)

            #print(Resultados.loc[(Resultados['CPU'] is Cpu) & (Resultados['RAM'] is Ram) & ((Resultados['Spantalla']>=Pantalla[0])&(Resultados['Spantalla']<=Pantalla[1]))])
            #print(Resultados.loc[(Resultados['CPU'] is Cpu)])
            RecoF = Resultados.loc[Resultados['CPU'].isin([Cpu])]
            if TipoPc == 0:
                RecoF = RecoF.loc[RecoF['RAM'].isin([Ram]) & ((RecoF['Spantalla']>=Pantalla1[0])&(RecoF['Spantalla']<=Pantalla1[1]))]
            if TipoPc == 1:
                RecoF = RecoF.loc[RecoF['RAM'].isin([Ram])]
            if TipoPc == 2:
                RecoF = RecoF.loc[RecoF['RAM'].isin([Ram]) & ((RecoF['Spantalla']>=Pantalla2[0])&(RecoF['Spantalla']<=Pantalla2[1]))]
            if Gpu == "nvidia/radeon":
                RecoF = RecoF.loc[RecoF['Capacidad de la tarjeta de video']!=False]

            if not RecoF.empty:
                Recomendaciones = Recomendaciones.append(RecoF, ignore_index=True)

        Recomendaciones=Recomendaciones.drop_duplicates()

        if Recomendaciones.empty:
            jsonf = recos.to_json(orient="records")
            parsed = json.loads(jsonf)
            Recomendaciones= parsed

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