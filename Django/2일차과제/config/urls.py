"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('feeds/', include('feeds.urls')), # 아래 3줄을 이거 하나로 퉁칠 수 있음. 또한 feeds에 생성하는 urls로 이사보내게 된다.
    # path('feeds/', views.show_feed),
    # path('feeds/all', views.all_feed),
    # path("feeds/<int:feed_id>/<str:feed_content>/", views.one_feed)
]
