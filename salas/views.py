from rest_framework import viewsets
from .serializer import SalaSerializer, AsientosSerializer
from .models import Sala, AsientosReservado

# Create your views here.
class SalasView(viewsets.ModelViewSet):
    serializer_class = SalaSerializer
    queryset = Sala.objects.all()

class AsientosView(viewsets.ModelViewSet):
    serializer_class = AsientosSerializer
    queryset = AsientosReservado.objects.all()
