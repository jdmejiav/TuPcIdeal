import requests
from bs4 import BeautifulSoup
import pandas as pd

urls= list()

def getpages(url:str):
    value=0
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(id='testId-searchResults-actionBar-bottom')
    try:
        job_elems = results.find_all('li', class_='jsx-1738323148 jsx-1104282991 pagination-item')#jsx-4018082099 section__pod-bottom-description
        for i in job_elems:
            value =i
        numberpages = value.find('button',class_='jsx-1738323148 jsx-1104282991 pagination-button')
        numberpages = int(numberpages.text)
    except:
        numberpages=1
    for pages in range(1 ,numberpages+1):
        URL = url+"?page="+str(pages)
        GetURLS(URL)
def GetURLS(url:str):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(id='testId-searchResults-products')
    Products = results.find_all('a',href=True)#jsx-4018082099 section__pod-bottom-description
    for product in Products:
        if product['href'] not in urls:
            urls.append(product['href'])
def falabella(Sele:int):
    TYPEPC = ""
    if Sele == 0:
        TYPEPC="https://www.falabella.com.co/falabella-co/category/cat1361001/Computadores--Portatiles-"
    elif Sele == 1:
        TYPEPC="https://www.falabella.com.co/falabella-co/category/cat50611/Computadores-de-Mesa"
    elif Sele == 2:
        TYPEPC="https://www.falabella.com.co/falabella-co/category/cat50611/Computadores-de-Mesa"
    getpages(TYPEPC)
    pcs = list()
    for url in urls:
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')
        results = soup.find(id='productInfoContainer')
        results2 = soup.find('div',class_='jsx-2134917503 headline-wrapper fa--image-gallery-item__desktop')
        img = results2.find('img',class_='jsx-2487856160')
        job_elems = results.find_all('tr', class_='jsx-428502957')

        specs = {
            "urli":img['src'],
            "CPU": "",
            "RAM": "",
            "Spantalla": "",
            "HDD":"",
            "SSD":"",
            "Modelo del procesador":"",
            "RAM expandible":"",
            "GPU":"",
            "Modelo tarjeta de video":"",
            "Capacidad de la tarjeta de video":"",
            "url":url,
            "Marca":"",
            "Tipo":"",
        }
        translate = {
            "Procesador": "CPU",
            "Memoria RAM": "RAM",
            "Tamaño de la pantalla": "Spantalla",
            "Disco duro HDD":"HDD",
            "Unidad de estado sólido SSD":"SSD",
            "Modelo del procesador":"Modelo del procesador",
            "RAM expandible":"RAM expandible",
            "Tarjeta de video":"GPU",
            "Modelo tarjeta de video":"Modelo tarjeta de video",
            "Capacidad de la tarjeta de video":"Capacidad de la tarjeta de video",
            "Marca":"Marca",
            "Tipo":"Tipo"
        }
        for job_elem in job_elems:
            Nombre = job_elem.find('td',class_='jsx-428502957 property-name')
            if Nombre.text in translate:
                ValorN = translate[Nombre.text]
                spec = job_elem.find('td',class_='jsx-428502957 property-value')
                specs[ValorN]= (spec.text).lower()
        pantalla = specs["Spantalla"]
        pantalla = pantalla.replace(" pulgadas","")
        try:
            specs["Spantalla"]= float(pantalla)
        except :
            specs["Spantalla"] = 0.0
        ssd = specs['SSD']
        Gpumemo = specs['Capacidad de la tarjeta de video']
        if ssd == "" or ssd =="no aplica":
            specs['SSD']=False

        if Gpumemo == "" or Gpumemo =="no aplica":
            specs['Capacidad de la tarjeta de video']=False
        pcs.append(specs)
    return pd.DataFrame.from_dict(pcs)