from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.permissions import IsAuthenticated # 이걸 안넣어서인가 api/v1/users/myinfo 접속이 안되었다.
from .serializers import MyInfoUserSerializer
from django.contrib.auth.password_validation import validate_password
from rest_framework.authentication import TokenAuthentication # 사용자 인증 (추가)
from rest_framework.permissions import IsAuthenticated # 권한 부여 (추가)

# Create your views here.
# api/vi/users [POST] -> 유저 생성 API
class Users(APIView):
    def post(self, request):
        # 비번 -> 검증을 해야되고, hash화 저장하는것이 필요
        # 나머지 -> 비번 외 다른 데이터들
        password = request.data.get('password')
        serializer = MyInfoUserSerializer(data=request.data)

        try:
            validate_password(password) # 비번 validation
        except:
            raise ParseError('Invalid password') # 오류가 났을때 유저에게 공유
        
        if serializer.is_valid():
            user = serializer.save() # 새로운 유저를 생성
            user.set_password(password) # 비번을 해쉬화하는 함수로 업데이트
            user.save() # 데이터 업뎃 후 저장

            serializer = MyInfoUserSerializer(user)
            return Response(serializer.data)
        else:
            raise ParseError(serializer.errors)
        
# api/v1/users/myinfo [GET,PUT] -> 유저 정보 업데이트(수정)
class MyInfo(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # 읽기
    def get(self, request):
        user = request.user
        serializer = MyInfoUserSerializer(user)
        return Response(serializer.data)
    
    # 업데이트
    def put(self, request):
        user = request.user
        serializer = MyInfoUserSerializer(user, data=request.data, partial=True)

        # partial=True 로 설정하면 클라이언트는 변경하고자 하는 필드만 포함한 데이터를 제공할 수 있고, 시리얼라이저는 제공된 필드만 업뎃한다.

        if serializer.is_valid():
            user = serializer.save()
            serializer = MyInfoUserSerializer(user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

from django.contrib.auth import authenticate, login
from rest_framework import status
# api/v1/users/login
class Login(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            raise ParseError()
        
        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

from django.contrib.auth import logout        
# api/vi/users/logout
class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

import jwt
from django.conf import settings

class JWTLogin(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            raise ParseError
        
        user = authenticate(request, username=username, password=password)

        if user:
            payload = {'id': user.id, 'username': user.username}

            token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')

            return Response({'token': token})

from config.authentication import JWTAuthentication
class UserDetailView(APIView):
    # authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        
        return Response({'id': user.id, 'username': user.username})