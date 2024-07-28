# dropout_prediction/serializers.py
from rest_framework import serializers

class DropoutPredictionSerializer(serializers.Serializer):
    marks = serializers.FloatField()
    behaviour = serializers.FloatField()
    absent_days = serializers.FloatField()

class HighRiskStudentSerializer(serializers.Serializer):
    SerialNumber = serializers.IntegerField()
    AbsentDays = serializers.FloatField()
    Behaviour = serializers.FloatField()
    Marks = serializers.FloatField()
    PredictedDropoutProbability = serializers.FloatField()
