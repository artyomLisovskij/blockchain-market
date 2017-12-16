$(document).ready(function(){
	var code = '0x6060604052341561000f57600080fd5b60405162000f2738038062000f278339810160405280805182019190602001805182019190602001805190602001909190805182019190505033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836000908051906020019061009f9291906100fe565b5080600290805190602001906100b69291906100fe565b5082600190805190602001906100cd9291906100fe565b50816003819055506000600681905550600060058190555060006007819055506000600881905550505050506101a3565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013f57805160ff191683800117855561016d565b8280016001018555821561016d579182015b8281111561016c578251825591602001919060010190610151565b5b50905061017a919061017e565b5090565b6101a091905b8082111561019c576000816000905550600101610184565b5090565b90565b610d7480620001b36000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bf5780631a8adc241461014d5780631b9265b814610186578063278ecde1146101a45780638da5cb5b146101c757806398d5fdca1461021c578063a035b1fe14610245578063a2b40d191461026e578063b3f22a2f14610291578063b5cdaeba146102b4578063ef430aa6146102c9578063f3ccaac014610357575b600080fd5b34156100ca57600080fd5b6100d26103e5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101125780820151818401526020810190506100f7565b50505050905090810190601f16801561013f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015857600080fd5b610184600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610483565b005b61018e61052c565b6040518082815260200191505060405180910390f35b34156101af57600080fd5b6101c560048080359060200190919050506106b5565b005b34156101d257600080fd5b6101da6108a9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022757600080fd5b61022f6108cf565b6040518082815260200191505060405180910390f35b341561025057600080fd5b6102586108d9565b6040518082815260200191505060405180910390f35b341561027957600080fd5b61028f60048080359060200190919050506108df565b005b341561029c57600080fd5b6102b26004808035906020019091905050610945565b005b34156102bf57600080fd5b6102c7610afa565b005b34156102d457600080fd5b6102dc610bc4565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561031c578082015181840152602081019050610301565b50505050905090810190601f1680156103495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561036257600080fd5b61036a610c62565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103aa57808201518184015260208101905061038f565b50505050905090810190601f1680156103d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b505050505081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104df57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc6008549081150290604051600060405180830381858888f19350505050151561052157600080fd5b600060088190555050565b600080600354341015151561054057600080fd5b6003543403905060016005540160058190555060a0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020016000815260200160035481526020016000151581525060096000600554815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050600354600a600060055481526020019081526020016000208190555060035460076000828254019250508190555060008111156106ac573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156106ab57600080fd5b5b60055491505090565b6106bd610d00565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561071957600080fd5b6009600083815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600a60008381526020019081526020016000206000905560096000838152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000905560038201600090556004820160006101000a81549060ff021916905550508060600151600760008282540392505081905550806000015173ffffffffffffffffffffffffffffffffffffffff166108fc82606001519081150290604051600060405180830381858888f1935050505015156108a557600080fd5b5050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600354905090565b60035481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561093b57600080fd5b8060038190555050565b61094d610d00565b6009600083815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a3b57600080fd5b600a6000838152602001908152602001600020600090556064605e826060015102811515610a6557fe5b0460066000828254019250508190555060646006826060015102811515610a8857fe5b04600860008282540192505081905550806060015160076000828254039250508190555060016009600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260096000848152602001908152602001600020600201819055505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b5657600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6006549081150290604051600060405180830381858888f193505050501515610bba57600080fd5b6000600681905550565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c5a5780601f10610c2f57610100808354040283529160200191610c5a565b820191906000526020600020905b815481529060010190602001808311610c3d57829003601f168201915b505050505081565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cf85780601f10610ccd57610100808354040283529160200191610cf8565b820191906000526020600020905b815481529060010190602001808311610cdb57829003601f168201915b505050505081565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160001515815250905600a165627a7a72305820e13633ec9983ca680145dd8c1462f9501c532384ef6c256958a7ec0b54fa85d40029';
	var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nalogovaya",
				"type": "address"
			}
		],
		"name": "payNalog",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pay",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_order",
				"type": "uint256"
			}
		],
		"name": "refund",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_new_price",
				"type": "uint256"
			}
		],
		"name": "changePrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_order",
				"type": "uint256"
			}
		],
		"name": "approveReceived",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "transferOwnMoney",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "category",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "image",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_category",
				"type": "string"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_image",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];
	if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    web3.eth.defaultAccount = web3.eth.coinbase;
    $('.rightblock .merchant').attr('href', $('.rightblock .merchant').attr('href')+'/'+ web3.eth.defaultAccount);
    $('.rightblock .customer').attr('href', $('.rightblock .customer').attr('href')+'/'+ web3.eth.defaultAccount);
    if($('.preview').length){
    	$('input[name="name"]').change(function(){
    		$('.product .product__title').html($(this).val());
    	});
    	$('input[name="image"]').change(function(){
    		$('.product .product__image').attr('src', $(this).val());
    	});
    	$('input[name="price"]').change(function(){
    		$('.product .product__price').html($(this).val()+' WEI');
    	});
    	$('input[name="name"]').change();
    	$('input[name="image"]').change();
    	$('input[name="price"]').change();
    }
	$('.new_product').click(function() {
		web3.eth.sendTransaction({
			data: code,
			arguments: [$('input[name="name"]').val(), $('input[name="category"]').val(), $('input[name="price"]').val(), $('input[name="image"]').val()],
	        from: web3.eth.defaultAccount
	    },function(err, transactionHash){
	    	waitForElement(transactionHash);
	    	swal(
			  'Ожидание',
			  'Все почти готово. Не закрывайте пожалуйста эту страницу..',
			  'warning'
			);
	    });
	    return false;
	});
	function waitForElement(transactionHash){
		var qwer = web3.eth.getTransactionReceipt(transactionHash, function(err, result){
			console.log(result);
    		if(result && typeof result.contractAddress !== "undefined"){
		        $.ajax({
					type: "POST",
					url: "/createProduct",	
					data: {
						'contract': result.contractAddress,
						'address': web3.eth.defaultAccount,
						'name': $('input[name="name"]').val(),
						'category': $('input[name="category"]').val(),
						'price': $('input[name="price"]').val(),
						'image': $('input[name="image"]').val()
					},
					success: function(data){
						swal(
						  data,
						  'Товар создан, теперь вы можете увидеть его в личном кабинете',
						  'success'
						);
					}
				});
		    } else{
		        window.setTimeout(waitForElement, 1000, transactionHash);
		    }
    	});
	};
	/* Функция покупки и записи инфы о покупке к нам в бд */
	$('.buy').click(function(){
		var address = $(this).closest('.address').val();
		var price = $(this).closest('.price').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000', value: price};
		contract.pay(
            options,
            function (error, result) {
                if (!error) {
                	// успешно, надо добавить в бд
                	$.ajax({
						type: "POST",
						url: "/buy",	
						data: {
							'address': web3.eth.defaultAccount,
							'product_address': address
						},
						success: function(data){
							swal(
							  data,
							  'Товар куплен! Просмотреть купленные товары вы можете в личном кабинете',
							  'success'
							);
						}
					});
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	});
	/*  Функция подтверждения получения товара */
	$('.confirm').click(function() {
		var address = $('#address').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		contract.approveReceived(
            options,
            function (error, result) {
                if (!error) {
					swal(
					  data,
					  'Вы подтвердили получение товара.',
					  'success'
					);
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	});
	/*  Функция возврата денег за товар */
	$('.refund').click(function() {
		var address = $('#address').val();
		var order = $(this).closest('.order_id').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		contract.refund(
			order,
            options,
            function (error, result) {
                if (!error) {
					swal(
					  data,
					  'Вы вернули деньги по заказу №' + order,
					  'success'
					);
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	});
	/*  Функция возврата денег за товар */
	$('.refund').click(function() {
		var address = $(this).closest('.address').val();
		var order = $(this).closest('.order_id').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		contract.refund(
			order,
            options,
            function (error, result) {
                if (!error) {
					swal(
					  data,
					  'Вы вернули деньги по заказу №' + order,
					  'success'
					);
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	});
	/*  Функция оплаты налогов за товар */
	$('.refund').click(function() {
		var address = $(this).closest('.address').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		contract.payNalog(
            options,
            function (error, result) {
                if (!error) {
					swal(
					  data,
					  'Вы оплатили налоги за товар' + address,
					  'success'
					);
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	});
	/*  Функция оплаты налогов за товар */
	$('.nalog').click(function() {
		var address = $(this).closest('.address').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		contract.payNalog(
            options,
            function (error, result) {
                if (!error) {
					swal(
					  data,
					  'Вы оплатили налоги за товар' + address,
					  'success'
					);
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	});
	/*  Функция вывода полученных денег за товар */
	$('.withdrawal').click(function() {
		var address = $(this).closest('.address').val();
		var contract = window.web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		contract.transferOwnMoney(
            options,
            function (error, result) {
                if (!error) {
					swal(
					  data,
					  'Вы вывели деньги за товар' + address,
					  'success'
					);
                } else {
                    swal(
						  'Ошибка!',
						  error,
						  'error'
					);
                }
            }
        );
	}); 
	
	
	function getPrice(address) {
		
		
		var contract = web3.eth.contract(abi).at(address);
		web3.eth.defaultAccount = web3.eth.coinbase;
		var options = { from: web3.eth.defaultAccount, gas: '3000000'};
		
		contract.price.call(
                function (error, result){
                	console.log(contract);
                    if(!error){
                        console.log(result);
                    } else {
                        console.log(error);
                    }
                });
		};
	
	console.log(getPrice("0x7a677b5a2025ee06a866fcec8dfeb49e23ee645"));
	
});
