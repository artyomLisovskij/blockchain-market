from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    url(r'^$', views.main),
    url(r'^createProduct$', views.createProduct),
    url(r'^buy', views.buy),
    url(r'^market/$', views.market),
    path('bought_history/<str:user_address>/', views.boughtHistory),
    path('merchant/<str:user_address>/', views.merchantHistory),
    path('category/<int:category_id>/', views.categoryPage),
    path('item/<int:item_id>/', views.itemPage),
]