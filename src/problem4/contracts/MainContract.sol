// SPDX-License-Identifier: MIT
pragma solidity >0.4.22 <= 0.9.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MainContract{

  struct Token {
    address token;
    uint balance;
  }
  
  function getBalances(address user, address[] memory tokens) view public returns(Token[] memory){
      Token[] memory tokenBalances = new Token[](tokens.length);
      for(uint i = 0 ; i < tokens.length ; i++){
        tokenBalances[i] = getBalance(user, tokens[i]);
      }

      return tokenBalances;
  }

  function getBalance(address user, address token) view public returns(Token memory){
    uint balance = IERC20(token).balanceOf(user);
    return Token(token, balance);
  }
}
