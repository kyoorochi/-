from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .serializers import FeedSerializer
from .models import Feed

# Create your views here.
# api/vi/feed [POST]로 실행되게 설정하기

class Feeds(APIView):
    # 전체 게시글 데이터 조회
    def get(self, request):
        feeds = Feed.objects.all()
        # many=True, feeds 객체가 단일 객체이면 many=False(기본값)
		# Feed 모델은 다른 객체도 참조하고 있기 때문에 many=True로 변경 필요. (여러 객체 직렬화)

        # 객체 -> JSON 형태로 변환 (시리얼라이즈)
        serializer = FeedSerializer(feeds, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        # 클라이언트가 보내준 json을 object화
        serializer = FeedSerializer(data=request.data)

        # JSON을 시리얼라이즈한 데이터를 피드 모델을 기반으로 Data Validation 해줘야한다.
        # 그렇지 않을 경우 아래 feed 명령부분은 작동하지 않는다.
        if serializer.is_valid():
            feed = serializer.save(user=request.user)
            
            serializer = FeedSerializer(feed)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

class FeedDetatil(APIView):
    def get_object(self, feed_id):
        try:
            return Feed.objects.get(id=feed_id)
        except Feed.DoesNotExist:
            raise NotFound
        
    def get(self, request, feed_id):
        feed = self.get_object(feed_id)
        # object 상태인 feed를 json 형태로 변환하려면? 시리얼라이저

        serializer = FeedSerializer(feed)
        return Response(serializer.data)