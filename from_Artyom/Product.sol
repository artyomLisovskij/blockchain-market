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
    
    /*struct Buy{
        uint256 timestamp;
        uint256 amount;
        bool received;
    }
    mapping (address => Buy) public bought; */

    function Product(string _name, string _category, uint256 _price) 
    public 
    {
        owner = msg.sender;
        name = _name;
        category = _category;
        price = _price;
    }
    
    function() payable
    public
    {   
        revert();
    }
}