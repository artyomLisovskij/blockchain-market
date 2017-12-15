pragma solidity ^0.4.18;

library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract Product {
    using SafeMath for uint256;
    string public name;
    string public category;
    uint256 public price;
    address public owner;
    
    struct Buy{
        address who;
        uint256 timestamp;
        uint256 receivedat;
        uint256 amount;
        bool received;
    }
    uint private numBuys;
    uint256 private amount;
    uint256 private amountHolded;
    uint256 private nalog;
    mapping (uint => Buy) private history;
    mapping (uint => uint256) private holded;
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    function Product(string _name, string _category, uint256 _price) 
    public 
    {
        owner = msg.sender;
        name = _name;
        category = _category;
        price = _price;
        amount = 0;
        numBuys = 0;
        amountHolded = 0;
        nalog = 0;
    }
    function pay()
    payable
    public returns (uint) {
        require (msg.value >= price);
        uint256 moneyToReturn = msg.value - price; 
        numBuys = numBuys + 1;
        history[numBuys] = Buy(msg.sender, now, 0, price, false);
        holded[numBuys] = price;
        amountHolded += price;
        if(moneyToReturn > 0)
            msg.sender.transfer(moneyToReturn);
        return numBuys;
    }
    function approveReceived(uint _order)
    public{
        Buy memory _buy = history[_order];
        require (msg.sender == _buy.who);
        delete holded[_order];
        amount += _buy.amount * 94 / 100;
        nalog += _buy.amount * 6 / 100;
        amountHolded -= _buy.amount;
        history[_order].received = true;
        history[_order].receivedat = now;
    }
    function refund(uint _order)
    onlyOwner
    public{
        Buy memory _buy = history[_order];
        delete holded[_order];
        delete history[_order];
        amountHolded -= _buy.amount;
        _buy.who.transfer(_buy.amount);
    }
    function payNalog(address _nalogovaya)
    onlyOwner
    public{
        _nalogovaya.transfer(nalog);
        nalog = 0;
    }
    function transferOwnMoney()
    onlyOwner
    public{
        owner.transfer(amount);
        amount = 0;
    }
    function changePrice(uint256 _new_price)
    onlyOwner
    public{
        price = _new_price;
    }
}