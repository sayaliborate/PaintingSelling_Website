from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Registration
from .serializers import RegistrationSerializer, LoginSerializer

class CreateRegistration(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetRegistration(APIView):
    def post(self, request, *args, **kwargs):
        registration_id = request.data.get('id')
        
        if not registration_id:
            return Response({"error": "ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            registration = Registration.objects.get(id=registration_id)
        except Registration.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = RegistrationSerializer(registration)
        return Response(serializer.data)

class UpdateRegistration(APIView):
    def post(self, request, *args, **kwargs):
        registration_id = request.data.get('id')
        
        if not registration_id:
            return Response({"error": "ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            registration = Registration.objects.get(id=registration_id)
        except Registration.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = RegistrationSerializer(registration, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteRegistration(APIView):
    def post(self, request, *args, **kwargs):
        registration_id = request.data.get('id')
        if not registration_id:
            return Response({"error": " ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            registration = Registration.objects.get(id=registration_id)
        except Registration.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        registration.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

class Login(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user'] 
            # Exclude the password field from the response data
            user_data = RegistrationSerializer(user).data
            user_data.pop('password', None)  # Remove the password from the response
            return Response({"message": "Login successful", "user_data": user_data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)