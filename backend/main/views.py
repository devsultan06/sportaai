from http.client import HTTPResponse
from django.shortcuts import render
from django.http import JsonResponse
# from .schemas import AthleteSchema
# from .models import SportaUser
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

# class IndexView(APIView):
    
#     @AthleteSchema
#     def get(self, request):
#         return Response({"message": "Hello, world!"})