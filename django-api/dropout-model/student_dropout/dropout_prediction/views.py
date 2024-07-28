from django.http import JsonResponse
from .ml_model import DropoutProbabilityPredictor

# Initialize predictor
predictor = DropoutProbabilityPredictor("F:\\In-progress\\dropout-model\\student_dropout\\dropout_prediction\\student_data.csv")

def high_risk_students(request):
    high_risk = predictor.display_high_risk_students()
    return JsonResponse(high_risk, safe=False)

def update_student(request):
    student_index = int(request.GET.get('index'))
    was_present = request.GET.get('was_present').lower() == 'true'
    behaviour = int(request.GET.get('behaviour'))
    marks = request.GET.get('marks')
    if marks is not None:
        marks = int(marks)
    predictor.update_student_info(student_index, was_present, behaviour, marks)
    student_prediction = predictor.display_student_prediction(student_index)
    return JsonResponse(student_prediction, safe=False)
