from django.urls import path
from . import views

urlpatterns = [
    path('high_risk/', views.high_risk_students, name='high_risk'),
    path('update_student/', views.update_student, name='update_student'),
]
