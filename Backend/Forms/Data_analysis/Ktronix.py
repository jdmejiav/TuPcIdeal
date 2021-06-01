import requests
from bs4 import BeautifulSoup
import pandas as pd
from chromedriver_py import binary_path # this will get you the path variable
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from progress.bar import ChargingBar
import re
urls= list()
def getpages(url:str):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(class_='pagination--buttons')
    data = results.find(class_='pagination pagination--buttons pagination-ktronix nativeNavigation js-pagination-buttons')
    pages = int(data.get('data-numbers'))
    for i in range(1,pages+1):
        txt = url
        txt += "?page={}".format(i)
        GetURLS(txt)

def GetURLS(url:str):
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--ignore-certificate-errors-spki-list')
    options.add_argument('--ignore-ssl-errors')
    options.add_argument('--no-sandbox')
    options.add_argument("--log-level=3")
    options.add_argument('--incognito')
    options.add_argument('--headless')
    options.add_argument('--remote-debugging-port=9222')
    driver = webdriver.Chrome(executable_path=binary_path, chrome_options=options)
    driver.get(url)
    page_source = driver.page_source
    soup= BeautifulSoup(page_source,"lxml")

    results = soup.find(class_='product__listing product__list')
    for link in results.find_all('a',class_="js-product-click-datalayer",href=True):
        if link.get('href') not in urls:
            txt = "https://www.ktronix.com/"
            txt+= link.get('href')
            if txt not in urls:
                urls.append(txt)
    driver.quit()


def ktronix(Sele:int):
    TYPEPC = ""
    TIPO =""
    error=0
    if Sele == 0:
        print("Search laptops")
        TIPO="portatiles"
        TYPEPC="https://www.ktronix.com/computadores-tablet/computadores-portatiles/portatiles-tradicionales/c/BI_0050_KTRON"
    elif Sele == 1:
        print("Search desktop pc")
        TIPO="computadores de escritorio"
        TYPEPC="https://www.ktronix.com/computadores-tablet/computadores-escritorio/pcs-escritorio-tradicionales/c/BI_0070_KTRON"
    elif Sele == 2:
        print("All in one")
        TIPO="all in one"
        TYPEPC="https://www.ktronix.com/computadores-tablet/computadores-escritorio/computadores-all-in-one/c/BI_0060_KTRON"
    getpages(TYPEPC)
    pcs = list()
    bar = ChargingBar('Processing', max=len(urls))
    for url in urls:
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')
        try:
            results = soup.find(id='collapse_classification_1')
            results2 = soup.find('div',class_='price-block d-inline no-padding')
            try:
                price = results2.find('input',class_='price-hidden')
                price = price["value"]
                price = price.split('.')
                price = int(price[0])
            except:
                price = 0
            results3 = soup.find('div',class_='col-xs-12 col-sm-12 col-md-10 col-lg-11')
            try:
                img = results3.find('img',class_='owl-lazy js-zoom-desktop')
                img = 'https://www.ktronix.com/'+img['data-zoom-image']
            except:
                img = ''
            specs = {
                "urli":img,
                "Precio":price,
                "CPU": "",
                "RAM": "",
                "Spantalla": "",
                "HDD":0,
                "SSD":0,
                "Tipos almacenamiento":"",
                "Modelo del procesador":"",
                "GPU":"",
                "Modelo tarjeta de video":"",
                "Capacidad de la tarjeta de video":"",
                "url":url,
                "Marca":"",
                "Tipo":TIPO,
                "Almacenamiento":0
            }
            translate = {
                "Referencia Tarjeta Gráfica":"GPU",
                "Tipo Procesador": "CPU",
                "Memoria RAM": "RAM",
                "Tamaño Pantalla": "Spantalla",
                "Capacidad Disco Duro":"HDD",
                "Capacidad Disco Estado Solido":"SSD",
                "Tipos de Discos que Tiene":"Tipos almacenamiento",
                "Modelo del Procesador":"Modelo del procesador",
                "Tarjeta de video":"GPU",
                "Modelo Tarjeta Gráfica Independiente":"Modelo tarjeta de video",
                "Capacidad de la tarjeta de video":"Capacidad de la tarjeta de video",
                "Marca":"Marca",
                "Tipo":"Tipo"
            }
            cputranslate ={
                "amd r3":"amd ryzen r3",
                "amd r5":"amd ryzen r5",
                "amd r7":"amd ryzen r7",
                "amd r9":"amd ryzen r9"
            }    
            job_elems = results.find_all('tr')
            for job_elem in job_elems:
                Nombre = job_elem.find('td',class_='attrib specifications_lines')
                spec = job_elem.find('td',class_='text-right specifications_lines')
                Nombre = Nombre.text
                if Nombre in translate:
                    ValorN = translate[Nombre]
                    spec = (spec.text).lower()
                    x = spec.strip()
                    x= '\t'.join(filter(None, x.split('\t')))
                    specs[ValorN]= x
                    if Nombre == 'Modelo Tarjeta Gráfica Independiente':
                        vram =  x[-3:]
                        if "gb" in vram:
                            specs['Capacidad de la tarjeta de video']= vram
                    
                    if ValorN == "CPU" and "amd" in x:
                        if x in cputranslate:
                            x = cputranslate[x]
                    
                    if ValorN == 'HDD' or ValorN == 'SSD':
                        x=x.split()
                        try:
                            x=int(x[0])
                            capacidad = specs["Almacenamiento"]+x
                            specs["Almacenamiento"]=capacidad
                        except:
                            x=x[0]
                    specs[ValorN]= x  
            results3 = soup.find(id='collapse_classification_4')
            results3 = results3.find_all('tr')
            for process in results3:
                Nombre1 = process.find('td',class_='attrib specifications_lines')
                Nombre1=Nombre1.text
                spec1 = process.find('td',class_='text-right specifications_lines')
                spec1=spec1.text
                if Nombre1 in translate:
                    ValorN1 = translate[Nombre1]
                    spec1 = spec1.split()
                    try:
                        tamano=float(spec1[0])
                    except:
                        tamano=0
                        print("error")
                    specs[ValorN1]= tamano              
            ssd = specs['SSD']
            if ssd == 0:
                specs['SSD']=False
            hdd = specs['HDD']
            if hdd == 0:
                specs['HDD']=False    
            ram= specs['RAM']
            if 'gb' in ram:
                value = ram.replace('gb','')
                try:
                    value = int(value)
                except:
                    value = value
                specs['RAM']=value        

            gpu = specs["Modelo tarjeta de video"]
            if gpu !="":
                specs["GPU"]="sí"
            else:
                specs["GPU"]="no"
            try:
                found = re.findall(r'\d{1,2}gb', gpu)
                if not found:
                    found = re.findall(r'\d{1,2} gb', gpu)
            except:
                found = '' # apply your error handling
            if found:
                specs["Capacidad de la tarjeta de video"]=found[0]
            pcs.append(specs)
        except:
            error+=1
        bar.next()
    bar.finish()
    print("Errors searching:",error)      
    return pd.DataFrame.from_dict(pcs)
