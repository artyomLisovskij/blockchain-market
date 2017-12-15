from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def main(request):
    
    return render(request, 'index.html') 



def createProduct(request):
    if request.POST:
        name           = request.POST['name']
        category       = request.POST['category']
        price           = request.POST['price']
        owner           = request.POST['owner']
        
        print(name)
        print(category)
        print(price)
        print(owner)
    return render(request, 'index.html') 
    
