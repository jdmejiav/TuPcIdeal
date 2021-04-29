import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from Forms.models import Recomendations

Diccionario = {
    "Programacion": 4,
    "Ofimatica": 6,
    "Diseño Grafico": 2,
    "Arquitectura": 1,
    "Programas de ingenieria": 3,
    "Estudio": 5,
    "Multimedia": 7
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
    return get_recommendations(Reco,self.presupuesto)

def get_recommendations(title,budget:str):

    all_entries = Recomendations.objects.all()
    all_entries = all_entries.values()

    metadata = pd.DataFrame(all_entries, columns=['CPU','GPU','RAM','SSD','HDD','SELECCION','PRESUPUESTO'])   

    #Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
    tfidf = TfidfVectorizer()

    #get the indices from the dataframe
    indices = pd.Series(metadata.index, index=metadata['SELECCION'])

    # Get the index of the specs that matches the title
    idx = indices[title]

    #check if index has more than one similar value
    try:
        if(len(idx)>0):
            idx = idx[0]
    except:
        idx = indices[title]

    print(idx)
    #add the selected value on idx to still have the pc recomendation
    Specs = metadata.iloc[idx]
    Specs = Specs.to_dict()
    metadata= metadata.append(Specs,ignore_index=True)

    #Construct the required TF-IDF matrix by fitting and transforming the data
    tfidf_matrix = tfidf.fit_transform(metadata['SELECCION'])

    # Compute the cosine similarity matrix
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    # Get the pairwsie similarity scores of all recomendations with the possible recomendation
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the specs based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores top 10 most similar recomendations
    sim_scores = sim_scores[1:11]

    # Get the similar recomendation indices
    recomendationid = [i[0] for i in sim_scores]
    data = metadata.iloc[recomendationid]
    Filter = data['PRESUPUESTO']==budget
    TopResults= data[Filter]
    finalreco = TopResults.head(2)
    return finalreco
