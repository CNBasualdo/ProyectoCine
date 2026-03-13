from django.contrib import admin
from .models import Sala,Asiento,Funcion,Reserva

# Register your models here.

admin.site.register(Sala)
admin.site.register(Asiento)
admin.site.register(Funcion)
admin.site.register(Reserva)