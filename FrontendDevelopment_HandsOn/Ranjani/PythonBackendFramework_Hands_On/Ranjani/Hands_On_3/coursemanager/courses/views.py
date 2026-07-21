from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Course, Student, Enrollment
from .serializers import (
    CourseSerializer,
    StudentSerializer,
    EnrollmentSerializer
)


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer