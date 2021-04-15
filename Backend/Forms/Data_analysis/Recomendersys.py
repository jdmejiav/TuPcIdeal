Diccionario = {
    "Programacion": 4,
    "Ofimatica": 6,
    "Diseño Grafico": 2,
    "Arquitectura": 1,
    "Programas de ingenieria": 3,
    "Estudiar": 5,
    "Internet/Multimedia": 7
}

def analyze_data(self):
    
    Usos = self.usos
    Seleccion = 99
    Reco = ""
    for i in Usos:
        value = Diccionario[i]
        if value<Seleccion:
            Seleccion = value
            Reco = i
    print("We prioritaze to use recomend a Pc use for ->",Reco)
