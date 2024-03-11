from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView, TokenVerifyView,)

urlpatterns = [path('', views.Users.as_view()), # api/v1/users
               path("myinfo", views.MyInfo.as_view()), # api/v1/users/myinfo

               # Authentication
               path('getToken', obtain_auth_token), # username,password를 보내면 토큰을 반환. Django Rest Framwork Token
               path('login', views.Login.as_view()),  # Django session login
               path('logout', views.Logout.as_view()), # Django session logout

               # JWT Authentication (JWT 인증)
               path('login/jwt', views.JWTLogin.as_view()),
               path('login/jwt/info', views.UserDetailView.as_view()),

               # Simple JWT Authentication (Simple JWT 인증)
               path('login/simpleJWT', TokenObtainPairView.as_view()),
               path('login/simpleJWT/refresh', TokenRefreshView.as_view()),
               path('login/simpleJWT/verify', TokenVerifyView.as_view())
               ]