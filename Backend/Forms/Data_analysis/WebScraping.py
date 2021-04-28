from .Falabella import falabella
import pandas as pd

def processreco(recos,self,typeform:int):
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
        "Equilibrado":[13,14],
        "Pequeño":[11,12]
    }
    Pantalla = Tamano[Pantalla]
    TipoPc = TIPO[self.tipo]
    print(TipoPc)
    if typeform == 0:        
        print(0)

    elif typeform == 1 or typeform == 2:
        RAM = self.memoria
        SSD = self.solido
        if SSD == "Si":
            SSD = True
        else:
            SSD = False

    if typeform == 2:
        CAPACIDAD = self.almacenamiento

    Resultados = falabella(TipoPc)

    Recomendaciones = list()
    
    RecoF=""

    for values in recos.index:
        Cpu = recos['CPU'][values]
        Gpu = recos['GPU'][values]
        Ram = recos['RAM'][values]
        Ram = Ram.replace(' gb','GB')
        if RAM is not "":
            Ram = RAM
        print(Cpu)
        #print(Resultados.loc[(Resultados['CPU'] is Cpu) & (Resultados['RAM'] is Ram) & ((Resultados['Spantalla']>=Pantalla[0])&(Resultados['Spantalla']<=Pantalla[1]))])
        #print(Resultados.loc[(Resultados['CPU'] is Cpu)])
        RecoF = Resultados.loc[Resultados['CPU'].isin([Cpu])]
        RecoF = RecoF.loc[RecoF['RAM'].isin([Ram]) & ((RecoF['Spantalla']>=Pantalla[0])&(RecoF['Spantalla']<=Pantalla[1]))]

        #RecoF = RecoF.head(1)
    return RecoF