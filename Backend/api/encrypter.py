from argon2 import PasswordHasher
ph = PasswordHasher()

def encripter(pswrd:str):
    hash = ph.hash(pswrd)
    return hash
  
def checker(pswrd:str,pswrdU:str):
    try:
        ph.verify(pswrd, pswrdU)
        return True
    except:
        return False
