from django.db import models

# Create your models here.
class CommonModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True) # auto_now_add : 현재 데이터 생성 시간을 기준으로 생성. 이후 데이터가 업데이트 되어도 수정되지 않음
    updated_at = models.DateTimeField(auto_now=True) # auto_now : 생성되는 시간 기준으로 일단 생성. 이후 데이터가 업뎃되면 시간도 업뎃된 시간을 기준으로 됨.

    # Meta클래스는 권한, 데이터베이스 이름, 단 복수 이름, 추상화, 순서 지정 등과 같은 모델에 대한 다양한 사항을 정의하는 데 사용
    class Meta:
        abstract = True # DB 테이블에 추가하는 것을 원하지 않는다.