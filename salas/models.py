from django.db import models

# Create your models here.
class Sala(models.Model):
    nombre = models.CharField(max_length=50)
    filas = models.IntegerField()
    columnas = models.IntegerField()

    def __str__(self):
        return self.nombre
    
class Asiento(models.Model):
    sala = models.ForeignKey(Sala, on_delete=models.CASCADE, related_name="asientos")
    fila = models.IntegerField()
    columna = models.IntegerField()

    def __str__(self):
        return f"Sala {self.sala.nombre} - Fila {self.fila} Col {self.columna}"
    
class Funcion(models.Model):
    pelicula_id = models.IntegerField()
    sala = models.ForeignKey(Sala, on_delete=models.CASCADE)
    fecha_hora = models.DateTimeField()

    def __str__(self):
        return f"Peli {self.pelicula_id} - {self.fecha_hora}"
    
class Reserva(models.Model):
    funcion = models.ForeignKey(Funcion, on_delete=models.CASCADE, related_name="reservas")
    asiento =models.ForeignKey(Asiento, on_delete=models.CASCADE)
    reservado = models.BooleanField(default=True)

    def __str__(self):
        return f"Asiento{self.asiento.id}reservado"



