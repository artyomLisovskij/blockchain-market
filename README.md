# blockchain-market
Если я мерчант:
- добавление товара = сразу в блокчейн и к нам в бд
- таблица товаров юзера(вытащить из бд)
- таблица транзакций товаров юзера(просто вытащить из блокчейна)
    - вернуть заказ(запрос в блокчейн с номером заказа)

- оплатить налоги(запрос в блокчейн с номером налоговой)
- вывести деньги(запрос в блокчейн)
- сумма полученная за товар(просто вытащить из блокчейна)
- сумма в ожидании(просто вытащить из блокчейна)
- таблица повисших заказов(просто вытащить из блокчейна)
- отложено на налоги(просто вытащить из блокчейна)

Если я юзер:
- список всех товаров(берем список адресов контрактов из нашей бд)
    - список товаров по категории(берем список адресов контактов из бд по категории)
- инофрмация о товаре(просто вытащить из блокчейна по адресу контракта)
- купить товар(запрос в блокчейн с оплатой суммы, если не роллбек, то добавляем к нам в бд к пользователю)
    - купить товар можно по qr коду = сканируем и переходим по ссылке где оплата товара через web3js
    - купить товар по той же ссылке просто web3js
- подтвердить получение товара(запрос в блокчейн с указанием номера транзакции)
- таблица купленных товаров(берем список адресов контрактов по юзеру из нашей бд)