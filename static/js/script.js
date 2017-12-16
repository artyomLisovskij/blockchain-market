$(document).ready(function(){
	var code = '0x6060604052341561000f57600080fd5b604051610d91380380610d918339810160405280805182019190602001805182019190602001805190602001909190505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600090805190602001906100979291906100de565b5081600190805190602001906100ae9291906100de565b50806002819055506000600581905550600060048190555060006006819055506000600781905550505050610183565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011f57805160ff191683800117855561014d565b8280016001018555821561014d579182015b8281111561014c578251825591602001919060010190610131565b5b50905061015a919061015e565b5090565b61018091905b8082111561017c576000816000905550600101610164565b5090565b90565b610bff806101926000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a95780631a8adc24146101375780631b9265b814610170578063278ecde11461018e5780638da5cb5b146101b1578063a035b1fe14610206578063a2b40d191461022f578063b3f22a2f14610252578063b5cdaeba14610275578063ef430aa61461028a575b600080fd5b34156100b457600080fd5b6100bc610318565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b61016e600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103b6565b005b61017861045f565b6040518082815260200191505060405180910390f35b341561019957600080fd5b6101af60048080359060200190919050506105e8565b005b34156101bc57600080fd5b6101c46107dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021157600080fd5b610219610802565b6040518082815260200191505060405180910390f35b341561023a57600080fd5b6102506004808035906020019091905050610808565b005b341561025d57600080fd5b610273600480803590602001909190505061086e565b005b341561028057600080fd5b610288610a23565b005b341561029557600080fd5b61029d610aed565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102dd5780820151818401526020810190506102c2565b50505050905090810190601f16801561030a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103ae5780601f10610383576101008083540402835291602001916103ae565b820191906000526020600020905b81548152906001019060200180831161039157829003601f168201915b505050505081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc6007549081150290604051600060405180830381858888f19350505050151561045457600080fd5b600060078190555050565b600080600254341015151561047357600080fd5b6002543403905060016004540160048190555060a0604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020016000815260200160025481526020016000151581525060086000600454815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff0219169083151502179055509050506002546009600060045481526020019081526020016000208190555060025460066000828254019250508190555060008111156105df573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156105de57600080fd5b5b60045491505090565b6105f0610b8b565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064c57600080fd5b6008600083815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600960008381526020019081526020016000206000905560086000838152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000905560038201600090556004820160006101000a81549060ff021916905550508060600151600660008282540392505081905550806000015173ffffffffffffffffffffffffffffffffffffffff166108fc82606001519081150290604051600060405180830381858888f1935050505015156107d857600080fd5b5050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086457600080fd5b8060028190555050565b610876610b8b565b6008600083815260200190815260200160002060a060405190810160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561096457600080fd5b60096000838152602001908152602001600020600090556064605e82606001510281151561098e57fe5b04600560008282540192505081905550606460068260600151028115156109b157fe5b04600760008282540192505081905550806060015160066000828254039250508190555060016008600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055504260086000848152602001908152602001600020600201819055505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7f57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f193505050501515610ae357600080fd5b6000600581905550565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b835780601f10610b5857610100808354040283529160200191610b83565b820191906000526020600020905b815481529060010190602001808311610b6657829003601f168201915b505050505081565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160001515815250905600a165627a7a723058206a6db8fbd64bb549b15d0083dc7b9ce43db4eb1368c44a9d9c008dae971663cb0029';
	var abi =[
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
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		}
	];
	$('.button').click(function() {
	    if (typeof web3 !== 'undefined') {
	        web3 = new Web3(web3.currentProvider);
	    } else {
	        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	    }
	
	    web3.eth.defaultAccount = web3.eth.coinbase;
		web3.eth.contract(abi).new(
			{
				from: web3.eth.defaultAccount,
				data: code,
				arguments: [$('input[name="name"]').val(), $('input[name="category"]').val(), $('input[name="price"]').val(), $('input[name="image"]').val()]
			}, 
			function (err, contract) {
            if(err) {
            	swal(
					  'Ошибка!',
					  err,
					  'error'
				);
                return;
            } else if(contract.address){
                myContract = contract;
                $.ajax({
					type: "POST",
					url: "/createProduct",	
					data: {
						'contract':  myContract.address,
						'address': web3.eth.defaultAccount,
						'name': $('input[name="name"]').val(),
						'category': $('input[name="category"]').val(),
						'price': $('input[name="price"]').val(),
					},
					success: function(data){
						swal(
						  data,
						  'Товар создан, теперь вы можете увидеть его в личном кабинете',
						  'success'
						);
					}
				});
                
            }
        });
	    /*var myContract = new web3.eth.Contract(abi);
	    myContract.deploy({
	        data: ',
	        arguments: [$('input[name="name"]').val(), $('input[name="category"]').val(), $('input[name="price"]').val()]
	    })
	    .send({
	        from: web3.eth.defaultAccount,
	        gas: 1500000,
	        gasPrice: '30000000000000'
	    }, function(error, transactionHash){ 
	        console.log(error);
	    })
	    .on('receipt', function(receipt){
	       console.log(receipt.contractAddress) // contains the new contract address
	    })
	    .on('confirmation', function(confirmationNumber, receipt){
	        console.log('pending');
	        
	    })
	    .then(function(newContractInstance){
	        console.log(newContractInstance.options.address) // instance with the new contract address
	    }); */
	
	    return false;
	});
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
});
