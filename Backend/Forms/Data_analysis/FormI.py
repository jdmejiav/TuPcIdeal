class FormBasic:
  def __init__(self, presupuesto, tipo, marca, usos, pantalla):
    self.presupuesto = presupuesto
    self.tipo = tipo
    self.marca = marca
    self.usos = usos
    self.pantalla = pantalla 

class FormIntermediate:
  def __init__(self, presupuesto, tipo, marca, usos, memoria, solido, pantalla):
    self.presupuesto = presupuesto
    self.tipo = tipo
    self.marca = marca
    self.usos = usos
    self.memoria = memoria
    self.solido = solido
    self.pantalla = pantalla 

class FormAdvanced:
  def __init__(self, presupuesto, tipo, marca, usos, memoria, solido, almacenamiento, pantalla, gama):
    self.presupuesto = presupuesto
    self.tipo = tipo
    self.marca = marca
    self.usos = usos
    self.memoria = memoria
    self.solido = solido
    self.almacenamiento = almacenamiento
    self.pantalla = pantalla 
    self.gama = gama