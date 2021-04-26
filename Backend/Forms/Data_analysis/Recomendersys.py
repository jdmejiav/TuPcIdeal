import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from Forms.models import Recomendations

Diccionario = {
    "Programacion": 4,
    "Ofimatica": 6,
    "diseño grafico/arquitectura": 2,
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
    return get_recommendations(Reco,'moderado')

def get_recommendations(title,budget:str):

    all_entries = Recomendations.objects.all()
    all_entries = all_entries.values()

    metadata = pd.DataFrame(all_entries, columns=['CPU','GPU','RAM','SSD','HDD','SELECCION','PRESUPUESTO'])   

    metadata['SELECCION'].head()

    #Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
    tfidf = TfidfVectorizer()

    #Replace NaN with an empty string
    metadata['SELECCION'] = metadata['SELECCION'].fillna('')

    #Construct the required TF-IDF matrix by fitting and transforming the data
    tfidf_matrix = tfidf.fit_transform(metadata['SELECCION'])

    #Output the shape of tfidf_matrix
    tfidf_matrix.shape

    # Compute the cosine similarity matrix
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    cosine_sim.shape
    indices = pd.Series(metadata.index, index=metadata['SELECCION']).drop_duplicates()
    #print(indices[:3])

    # Get the index of the movie that matches the title
    idx = indices[title]
    if(len(idx)>0):
        idx = idx[0]
    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:11]

    # Get the movie indices
    recomendationid = [i[0] for i in sim_scores]
    data = metadata.iloc[recomendationid]
    Filter = data['PRESUPUESTO']==budget
    TopResults= data[Filter]
    #return metadata.iloc[movie_indices]
    return TopResults
