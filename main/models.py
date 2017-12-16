from __future__ import unicode_literals

from django.db import models

class EthUsers(models.Model):
    address = models.CharField(max_length=42)
    
    def __str__(self):
        return '%s' % self.address
        
class Categories(models.Model):
    name = models.CharField(max_length=42)
    def __str__(self):
        return '%s' % self.name

class Products(models.Model):
    address = models.CharField(max_length=42)
    name = models.CharField(max_length=42)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    owner = models.ForeignKey(EthUsers, on_delete=models.CASCADE)
    price = models.IntegerField()
    last_price_date = models.DateField()
    
    def __str__(self):
        return '%s by %s' % (self.name, self.price)
        
class UserBought(models.Model):
    user = models.ForeignKey(EthUsers, on_delete=models.CASCADE)
    products = models.ManyToManyField(Products)
    
    def __str__(self):
        return 'Покупки пользователя %s' % (self.user.address)