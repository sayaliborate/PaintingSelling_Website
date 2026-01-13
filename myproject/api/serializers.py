from rest_framework import serializers
from .models import Registration

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['id', 'name', 'username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}  # Password is write-only

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = Registration.objects.create_user(**validated_data)
        if password:
            user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        try:
            user = Registration.objects.get(email=email)
        except Registration.DoesNotExist:
            raise serializers.ValidationError("User not found with this email")
        if not user.check_password(password):
            raise serializers.ValidationError("Incorrect password")
        return {"user": user}
