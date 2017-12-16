from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.main),
    url(r'^createProduct$', views.createProduct),
    url(r'^buy', views.buy),
    url(r'^market/$', views.market),
    url(r'^bought_history/(?P<user_address>\w+)$', views.boughtHistory),
    url(r'^merchant/(?P<user_address>\w+)$', views.merchantHistory),
    url(r'^category/(?P<category_id>\w+)$', views.categoryPage),
    url(r'^item/(?P<item_id>\w+)$', views.itemPage)
]