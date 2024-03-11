from django.conf import settings
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from users.models import User
import jwt

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get('jwt-auth') # JWT Token

        if not token:
            return None # 토큰이 없으면 없다고 말하라.
        
        # 토큰이 있다면
        try:
            decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256']) # 토큰을 업계표준인 HS256 알고리즘으로 암호화를 해제시켜라.
            user_id = decoded.get('id')

            user = User.objects.get(id=user_id)
            return (user, None)
        
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token has expired')
        except jwt.DecodeError:
            raise AuthenticationFailed('Error decoding token')
        except User.DoesNotExist:
            raise AuthenticationFailed('User not found')