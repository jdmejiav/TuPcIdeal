import requests
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
from progress.bar import ChargingBar
'''
borrar cuando funcione todo

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-certificate-errors-spki-list')
options.add_argument('--ignore-ssl-errors')
options.add_argument("--log-level=3")
options.add_argument('--incognito')
options.add_argument('--headless')
driver = webdriver.Chrome("D:\Downloads\chromedriver", options=options)
'''

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
    '''
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(id='testId-searchResults-products')
    Products = results.find_all('a',href=True)#jsx-4018082099 section__pod-bottom-description
    for product in Products:
        if product['href'] not in urls:
            urls.append(product['href'])
    '''

    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--ignore-certificate-errors-spki-list')
    options.add_argument('--ignore-ssl-errors')
    options.add_argument("--log-level=3")
    options.add_argument('--incognito')
    options.add_argument('--headless')
    driver = webdriver.Chrome("D:\Downloads\chromedriver", options=options)


    driver.get(url)
    page_source = driver.page_source
    soup= BeautifulSoup(page_source,"lxml")

    results = soup.find(class_='jsx-4099777552 search-results--products')

    for link in results.find_all('a',href=True):
        if link.get('href') not in urls:
            if 'falabella.com' not in link.get('href'):
                enlace = 'https://www.falabella.com.co'
                enlace += link.get('href')
                urls.append(enlace)
            else:    
                urls.append(link.get('href'))
                
    driver.quit()

def falabella(Sele:int):
    TYPEPC = ""
    error=0
    if Sele == 0:
        print("Search laptops")
        TYPEPC="https://www.falabella.com.co/falabella-co/category/cat1361001/Computadores--Portatiles-"
    elif Sele == 1:
        print("Search desktop pc and all in one")
        TYPEPC="https://www.falabella.com.co/falabella-co/category/cat50611/Computadores-de-Mesa"
    elif Sele == 2:
        TYPEPC="https://www.falabella.com.co/falabella-co/category/cat50611/Computadores-de-Mesa"
    getpages(TYPEPC)
    pcs = list()
    bar = ChargingBar('Processing', max=len(urls))
    for url in urls:
        try:
            page = requests.get(url)
            soup = BeautifulSoup(page.content, 'html.parser')
            results = soup.find(id='productInfoContainer')
            try:
                results2 = soup.find('div',class_='jsx-2134917503 headline-wrapper fa--image-gallery-item__desktop')
                img = results2.find('img',class_='jsx-2487856160')
            except:
                img=""
            try:
                results3 = soup.find('div',class_='jsx-3342506598 cmr-icon-container')
                price = results3.find('span',class_='copy13 primary high jsx-3736277290 normal')
                price = price.text
                price = price.split()
                price = price[1]
                price = price.replace('.','')
                price =int(price)
            except:
                price =0
            job_elems = results.find_all('tr', class_='jsx-428502957')

            specs = {
                "urli":img['src'],
                "Precio":price,
                "CPU": "",
                "RAM": "",
                "Spantalla": "",
                "HDD":0,
                "SSD":0,
                "Tipos almacenamiento":"",
                "Modelo del procesador":"",
                "RAM expandible":"",
                "GPU":"",
                "Modelo tarjeta de video":"",
                "Capacidad de la tarjeta de video":"",
                "url":url,
                "Marca":"",
                "Tipo":"",
                "Almacenamiento":0
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
            Gpumemo = specs['Capacidad de la tarjeta de video']

            ssd = specs['SSD']
            if ssd == "" or ssd =="no aplica":
                specs['SSD']=False
            else:
                if 'gb' in ssd:
                    value1 = ssd.replace('gb','')
                    #print("GB",int(value1))       
                    try:
                        ssd = int(value1)
                        specs['Almacenamiento']+=ssd
                        #print(ssd,specs['Almacenamiento'])
                    except:
                        ssd=value1
                        
                elif 'tb' in ssd:
                    value2 = ssd.replace('tb','')
                    #print("TB",value2)
                    try:
                        ssd = int(value2)*1000
                        specs['Almacenamiento']+=ssd
                        #print(ssd,specs['Almacenamiento'])
                    except:
                        ssd=value2
                specs['SSD']=ssd

            hdd = specs['HDD']
            if hdd == "" or hdd =="no aplica":
                specs['HDD']=False
            else:
                specs['HDD']=hdd
                specs['Almacenamiento']=""
            hdd = specs['HDD']
            ssd = specs['SSD']
            if hdd!=False and ssd!=False:
                specs['Tipos almacenamiento']="disco hibrido (hdd + sdd)"
            elif hdd!=False:
                specs['Tipos almacenamiento']="disco duro (hdd)"
            elif ssd!=False:
                specs['Tipos almacenamiento']="disco estado solido (ssd)"

            if Gpumemo == "" or Gpumemo =="no aplica":
                specs['Capacidad de la tarjeta de video']=False

            ram= specs['RAM']
            if 'gb' in ram:
                value = ram.replace('gb','')
                try:
                    value = int(value)
                except:
                    value = value
                specs['RAM']=value
            pcs.append(specs)
        except:
            error+=1
        bar.next()
    bar.finish()
    print("Errors searching:",error)      
    return pd.DataFrame.from_dict(pcs)