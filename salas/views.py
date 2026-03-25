from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Funcion, Asiento, Reserva

@api_view(["GET"])
def asientos_por_funcion(request, funcion_id):
    funcion = get_object_or_404(Funcion, id=funcion_id)
    asientos = Asiento.objects.filter(sala=funcion.sala)

    data=[]
    for asiento in asientos:
        reservado = Reserva.objects.filter(funcion=funcion, asiento=asiento).exists()
        data.append({
            "id": asiento.id,
            "fila":asiento.fila,
            "columna":asiento.columna,
            "reservado":reservado
        })

    return Response(data)

@api_view(["POST"])
def reservar_asiento(request):
    funcion_id = request.data["funcion_id"]
    asiento_id = request.data["asiento_id"]

    reserva, created = Reserva.objects.get_or_create(
        funcion_id = funcion_id,
        asiento_id = asiento_id
    )
    return Response({"reservado":True})

@api_view(["GET"])
def lista_funciones(request):
    funciones = Funcion.objects.all()
    data=[]
    for funcion in funciones:
        data.append({
            "id" : funcion.id,
            "pelicula_id" : funcion.pelicula_id,
            "sala" : funcion.sala.nombre,
            "horario" : funcion.fecha_hora
        })
    return Response(data)