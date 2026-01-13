from django.urls import path
from .views import CreateRegistration, GetRegistration, UpdateRegistration, DeleteRegistration,Login

urlpatterns = [
    path('register/', CreateRegistration.as_view(), name='create_registration'),
    path('login/', Login.as_view(), name='login'),
    path('get_registration/', GetRegistration.as_view(), name='get_registration'),
    path('update_registration/', UpdateRegistration.as_view(), name='update_registration'),
    path('delete_registration/', DeleteRegistration.as_view(), name='delete_registration'),
]
