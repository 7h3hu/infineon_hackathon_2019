pragma solidity ^0.4.24;


contract ERC721 {
  function totalSupply() public view returns (uint256 total);
  function balanceOf(address _owner) public view returns (uint256 balance);
  function ownerOf(uint256 _tokenId) external view returns (address owner);
  function approve(address _to, uint256 _tokenId) external;
  function transfer(address _to, uint256 _tokenId) external;
  function transferFrom(address _from, address _to, uint256 _tokenId) external;

  // Events
  event Transfer(address from, address to, uint256 tokenId);
  event Approval(address owner, address approved, uint256 tokenId);
}

contract ZeroKnowledgeIdentityContract is ERC721 {
  struct Proof {
    uint256 value;
    /*
    string[] A;
    string[] A_p;
    string[][] B;
    string[] B_p;
    string[] C;
    string[] C_p;
    string[] H;
    string[] K;
    uint256[] input;
    */
  }

  Proof[] public proofs;

  mapping (uint256 => address) public tokenOwners;
  mapping (address => uint256) public tokenCount;

  function totalSupply() public view returns (uint) {
    return proofs.length;
  }

  function balanceOf(address _owner) public view returns (uint256 count) {
    return tokenCount[_owner];
  }

  function ownerOf(uint256 _tokenId) external view returns (address owner) {
    owner = tokenOwners[_tokenId];
    require(owner != address(0));
  }

  function approve(address _to, uint256 _tokenId) external {
    // No required as tokens can not be transfered
    revert();
  }

  function transfer(address _to, uint256 _tokenId) external {
    // No required as tokens can not be transfered
    revert();
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) external {
    // No required as tokens can not be transfered
    revert();
  }

  function tokensOfOwner(address _owner) external returns (uint256[] tokenIds) {
    uint256 tokenCount = balanceOf(_owner);

    if (tokenCount == 0) {
      return new uint256[](0);
    }

    uint256[] memory result = new uint256[](1);
    uint256 totalCount = totalSupply();

    for (uint8 tokenId = 0; tokenId < totalCount; tokenId++) {
      if (tokenOwners[tokenId] == _owner) {  
        result[0] = tokenId;
      }
    }

    return result;
  }
}

contract Ownable {
  address private _owner;

  modifier onlyOwner() {
    require(isOwner());
    _;
  }

  constructor() public {
    _owner = msg.sender;
  }

  function owner() public view returns (address) {
    return _owner;
  }

  function isOwner() public view returns (bool) {
    return msg.sender == _owner;
  }
}

contract ZeroKnowledgeIdentityIssueContract is ZeroKnowledgeIdentityContract, Ownable {
  function issueIdentityToken(
    address _to,
    uint256 _value
    /*
    byte[2] calldata _A,
    byte[2] calldata _A_p,
    byte[2][2] calldata _B,
    byte[2] calldata _B_p,
    byte[2] calldata _C,
    byte[2] calldata _C_p,
    byte[2] calldata _H,
    byte[2] calldata _K,
    uint256[2] calldata _input
    */
  ) external onlyOwner {
    require(balanceOf(_to) == 0, "Identity has already been issued!");

    Proof memory _proof = Proof({
      value: _value
      /*
      A: _A,
      A_p: _A_p,
      B: _B,
      B_p: _B_p,
      C: _C,
      C_p: _C_p,
      H: _H,
      K: _K,
      input: _input
      */
    });

    uint256 tokenId = proofs.push(_proof) - 1;

    // Issue proof to receiver address
    tokenOwners[tokenId] = _to;
    tokenCount[_to] = 1;

    emit Transfer(address(0), _to, tokenId);
  }
}