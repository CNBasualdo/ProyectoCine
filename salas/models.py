from django.db import models

# Create your models here.
class Sala(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    total_asientos = models.PositiveIntegerField()
    asientos_reservados = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return f"{self.nombre} ({self.asientos_reservados}/{self.total_asientos} reservados)"

class AsientosReservado(models.Model):
    sala= models.ForeignKey(Sala, on_delete=models.CASCADE, related_name='asientos')
    numero_asiento = models.PositiveBigIntegerField()
    estado = models.CharField(
        max_length=20,
        choices=[
            ('reservado','Reservado'),
            ('ocupado', 'Ocupado'),
        ],
        default='reservado'
    )

    class Meta:
        unique_together = ('sala','numero_asiento')

    def __str__(self):
        return f"Asiento {self.numero_asiento}-{self.sala.nombre} ({self.estado})"
