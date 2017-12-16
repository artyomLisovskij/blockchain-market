from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from main.models import *
import datetime
import json
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404


def main(request):
    categories = Categories.objects.all()
    products = Products.objects.all()
    context = {
        'categories' : categories,
        'products' : products
    }
    return render(request, 'index.html', context) 

@csrf_exempt
def createProduct(request):
    if request.POST:
        name = request.POST['name']
        image = request.POST['image']
        category = request.POST['category']
        price = int(request.POST['price'])
        address = request.POST['address']
        contract = request.POST['contract']
        user, created = EthUsers.objects.get_or_create(address=address)
        category, is_created = Categories.objects.get_or_create(name=category)
        product = Products(
            name=name,
            image=image,
            category=category,
            owner = user,
            price = price,
            last_price_date = datetime.datetime.now())
        product.save()
        return HttpResponse('Продукт создан')
    else:
        return HttpResponseNotFound('<h1>No Page Here</h1>') 
    
def categoryPage(request, category_id):
    category = get_object_or_404(Categories, pk=category_id)
    objects = Products.objects.filter(category=category)
    context = {
        'category': category,
        'objects': objects
    }
    return render(request, 'category.html', context) 
    
def itemPage(item_id, request):
    item = get_object_or_404(Products, pk=item_id)
    category = get_object_or_404(Categories, pk=item.category.id)
    context = {
        'category': category,
        'item': item
    }
    return render(request, 'item.html', context)
    
@csrf_exempt
def buy(request):
    if request.POST:
        address = request.POST['address']
        product_address = request.POST['product_address']
        user, created = EthUsers.objects.get_or_create(address=address)
        product, is_created = Products.objects.get(address=product_address)
        user_bought = UserBought.objects.filter(user=user)
        if user_bought:
            user_bought.products.add(product)
            user_bought.save()
        else:
            user_bought = UserBought(user=user)
            user_bought.products.add(product)
            user_bought.save()
        return HttpResponse('Покупка совершена успешно!')
    else:
        return HttpResponseNotFound('<h1>No Page Here</h1>') 
     
def boughtHistory(request, user_address):
    user = get_object_or_404(EthUsers, address=user_address)
    bought = UserBought.objects.filter(user=user)
    context = {
        'user':user,
        'history_items':bought
    }
    return render(request, 'bought_history.html', context)
    
def merchantHistory(request, user_address):
    user, created = EthUsers.objects.get_or_create(address=user_address)
    products = Products.objects.filter(owner=user)
    context = {
        'user':user,
        'products':products
    }
    return render(request, 'merchant_history.html', context)
    