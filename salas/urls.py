from django.urls import path, include
from rest_framework import routers 
from salas import views


router = routers.DefaultRouter()
router.register(r'salas', views.SalasView,'salas')
router.register(r'asientos', views.AsientosView, 'asientos' )

urlpatterns =[
    path ("api/v1/", include(router.urls))
]


#todo genera las rutas get, put, delete