import requests
from bs4 import BeautifulSoup

def falabella():
    URL = 'https://www.falabella.com.co/falabella-co/category/cat1361001/Computadores--Portatiles-'
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(id='testId-searchResults-products')
    job_elems = results.find_all('div', class_='jsx-1585533350 search-results-list')#jsx-4018082099 section__pod-bottom-description
    print(len(job_elems))

    for job_elem in job_elems:
        title_elem = job_elem.find('ul', class_='jsx-4018082099 section__pod-bottom-description')
        price = job_elem.find('li', class_='jsx-3342506598 price-0')
        price2 = job_elem.find('li', class_='jsx-3342506598 price-0')
        title_elem= title_elem.text
        title_elem = title_elem.replace("Memoria"," Memoria")
        title_elem = title_elem.replace("Tamaño"," Tamaño")
        title_elem = title_elem.replace("Disco"," Disco")
        title_elem = title_elem.replace("Unidad"," Unidad")
        print("Producto",title_elem)
        print("Precio:",price.text)
        print("Precio final:",price2.text)
        print()
        #print(results.prettify())

def Ktronix():

    URL = 'https://www.ktronix.com/computadores-tablets/computadores-portatiles/c/BI_104_KTRON'
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')
    results = soup.find(class_='product__listing product__list')
    job_elems = results.find_all('li', class_='product__list--item product__list--ktronix js-product-item')#jsx-4018082099 section__pod-bottom-description
    print(len(job_elems))
    #print(results.prettify())


    for job_elem in job_elems:
        Pcinfo = job_elem.find_all('div', class_='product__information')#jsx-4018082099 section__pod-bottom-description
        for specs in Pcinfo:
            pcspecslist = specs.find('div', class_='product__information--specifications__block')
            
            if(pcspecslist is not None):
                ''' 
                b = a.find('div', class_='item--key')
                c = a.find('div', class_='item--value')
                f = a.find('div', class_='ilistem--key')
                '''
                pcname = specs.find('h2', class_='product__information--name')
                print(pcname.text)
                print(pcspecslist.text)
        price = job_elem.find('p', class_='product__price--discounts__price')
        print("Precio:",price.find('span',class_='price').text)
