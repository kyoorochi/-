from rest_framework.serializers import ModelSerializer
from .models import User

class MyInfoUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# Board에서 노출 시킬 User 시리얼라이저
class FeedUserSerializer(ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__' # 이건 전체를 다 보여주는 것
        fields = ('username', 'email', 'is_superuser') # 이건 지정한 것만 보여주는 것