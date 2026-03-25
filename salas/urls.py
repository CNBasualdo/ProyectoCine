from django.urls import path
from .views import asientos_por_funcion, reservar_asiento, lista_funciones

urlpatterns =[
    path("funciones/", lista_funciones),
    path("funciones/<int:funcion_id>/asientos/", asientos_por_funcion),
    path ("reservar/", reservar_asiento),
]



