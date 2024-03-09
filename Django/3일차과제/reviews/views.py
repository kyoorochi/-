from django.shortcuts import render
from .models import Review
from .serializers import ReviewSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, NotAuthenticated

# Create your views here.
# api/v1/reviews [GET] (전체 가져오기)
class Reviews(APIView):
    def get(self, request):
        reviews = Review.objects.all() # 장고 전체 객체를 불러온다.

        # (Serializer) 장고 객체 -> JSON 형태로 변환
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

# api/v1/reviews/review_id [GET] (특정데이터만 가져오기)
class ReviewDetail(APIView):
    def get(self, request, review_id):
        # 특정 review_id를 찾아서 있으면 표시, 없으면 NotFound로 표출하라
        try:
            review = Review.objects.get(id=review_id)
        except Review.DoesNotExist:
            raise NotFound
        
        serializer = ReviewSerializer(review)
        return Response(serializer.data)