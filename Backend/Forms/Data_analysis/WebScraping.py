from datetime import datetime
from .Falabella import falabella
from .Ktronix import ktronix
import pandas as pd
import json
import threading

ResultadosPortatil = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Tipos almacenamiento','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
ResultadosDesk = pd.DataFrame(columns=['CPU','RAM','Spantalla','HDD','SSD','Tipos almacenamiento','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','urli','Marca','Tipo'])
Activated = False

def fala():
    global Activated
    Activated=False
    print("Searching products on falabella.com")
    Resultados1 = falabella(0)
    global ResultadosPortatil
    global ResultadosDesk
    
    if Resultados1.empty:
        print("null")
    else:
        ResultadosPortatil = ResultadosPortatil.append(Resultados1, ignore_index=True)
        del Resultados1
    '''
    Resultados2 = falabella(1)
    if Resultados2.empty:
        print("null")
    else:
        ResultadosDesk = ResultadosDesk.append(Resultados2, ignore_index=True)
        del Resultados2
    '''
def ktron():
    print("Searching products on Ktronix.com")
    global ResultadosPortatil
    global ResultadosDesk
    Resultados1 = ktronix(0)
    if Resultados1.empty:
        print("null")
    else:
        ResultadosPortatil = ResultadosPortatil.append(Resultados1, ignore_index=True)
        del Resultados1
    print("Finish")

def startServ():
    global ResultadosPortatil
    global ResultadosDesk
    t1 = threading.Thread(target=fala)
    #t2 = threading.Thread(target=ktron)
  
    # starting thread 1
    t1.start()
    # starting thread 2
    #t2.start()
    '''
    Resultados1 = falabella(0)
    Resultados1 = Resultados1.append(ktronix(0), ignore_index=True)
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
    '''
def processreco(recos,self,typeform:int):
    try:
        RAM =''
        SSD =''
        CAPACIDAD=''
        Pantalla = self.pantalla
        TIPO={
            "Portátil":0,
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
            "bajo":[1000000,2000000],
            "ajustado":[1500000,2000000],
            "moderado":[2000000,2600000],
            "alto":[26000000,4000000]
        }
        Marca = self.marca
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

        Resultados = pd.DataFrame(columns=['urli','Precio','CPU','RAM','Spantalla','HDD','SSD','Tipos almacenamiento','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','Marca','Tipo'])

        if typeform == 2:
            CAPACIDAD = self.almacenamiento
        if TipoPc == 0:
            global ResultadosPortatil       
            Resultados = ResultadosPortatil  
        if TipoPc == 1 or TipoPc == 2:
            global ResultadosDesk       
            Resultados = ResultadosDesk

        Recomendaciones = pd.DataFrame(columns=['urli','Precio','CPU','RAM','Spantalla','HDD','SSD','Tipos almacenamiento','Almacenamiento','Modelo del procesador','RAM expandible','GPU','Modelo tarjeta de video','Capacidad de la tarjeta de video','url','Marca','Tipo'])

        if TipoPc == 2:
            Resultados = Resultados.loc[Resultados['Tipo'].isin(["all in one"])]
        elif TipoPc == 1:
            Resultados = Resultados.loc[Resultados['Tipo'].isin(["computadores de escritorio"])]

        for values in recos.index:
            Cpu = recos['CPU'][values]
            Gpu = recos['GPU'][values]
            Ram = recos['RAM'][values]
            Ssd = recos['SSD'][values]
            try:
                Ram = int(Ram.replace(' gb',''))
            except:
                Ram = Ram.replace(' gb','')
            if RAM != 'otro' and RAM !='':
                print("RAM:",RAM,"Ram:",Ram)
                try:
                    Ram = int(RAM.replace('GB',''))
                except:
                    Ram = RAM.replace('GB','')
                print("entre")
            print(Cpu)
            print(Gpu)
            print(Ssd,SSD)
            print(Ram)
            RecoF = Resultados.loc[Resultados['CPU'].isin([Cpu])]
            if TipoPc == 0:
                RecoF = RecoF.loc[((RecoF['RAM']>=Ram) & (RecoF['Spantalla']>=Pantalla1[0])&(RecoF['Spantalla']<=Pantalla1[1]))]#(RecoF['RAM']>=Ram) &
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

            if SSD:
                print("HOLA")
                opcion1='disco estado solido (ssd)'
                opcion2='disco hibrido (hdd + sdd)'
                RecoF = RecoF.loc[(RecoF['Tipos almacenamiento'] == opcion1)]

            if not RecoF.empty:
                Recomendaciones = Recomendaciones.append(RecoF, ignore_index=True)
            else:
                print("Sorry but we can't found any pc on internet")
        Recomendaciones=Recomendaciones.drop_duplicates()
        Precios = self.presupuesto
        Rango = Precios

        if "Indiferente" not in Marca:
            Marcas = [x.lower() for x in Marca]
            Recomendaciones = Recomendaciones.loc[Recomendaciones['Marca'].isin(Marcas)]

        Recomendaciones = Recomendaciones.loc[((Recomendaciones['Precio']>=Rango[0])&(Recomendaciones['Precio']<=Rango[1]))]
        if Recomendaciones.empty:
            '''
            jsonf = recos.to_json(orient="records")
            parsed = json.loads(jsonf)
            Recomendaciones= parsed
            print("Vacio")
            '''
            recos = recos.loc[recos['PRESUPUESTO'].isin([self.presupuesto])]
            recos = recos.head(2)
            jsonf = recos.to_json(orient="records")
            parsed = json.loads(jsonf)
            Recomendaciones= parsed
        elif len(Recomendaciones)>=1:
            jsonf = Recomendaciones.to_json(orient="records")
            parsed = json.loads(jsonf)
            Recomendaciones= parsed
        print(len(Recomendaciones))
        return Recomendaciones
    except:   
        print("error")
        recos = recos.loc[recos['PRESUPUESTO'].isin([self.presupuesto])]
        recos = recos.head(2)
        jsonf = recos.to_json(orient="records")
        parsed = json.loads(jsonf)
        return parsed
        
