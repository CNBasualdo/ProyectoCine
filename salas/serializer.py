from rest_framework import serializers
from .models import Sala, AsientosReservado



class SalaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sala
        fields = '__all__'

class AsientosSerializer(serializers.ModelSerializer):
    class Meta:
        model = AsientosReservado
        fields = '__all__'