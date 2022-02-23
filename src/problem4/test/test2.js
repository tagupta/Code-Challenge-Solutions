const { ethers} = require("ethers");

contract('Testing script', async (accounts) =>{
  console.log('test2');
  const ADDR = '0x555890D090786fDE0a1d84067BF59B33083F157f';
  const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        }
      ],
      "name": "getBalances",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ],
          "internalType": "struct MainContract.Token[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ],
          "internalType": "struct MainContract.Token",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const ADDRESS = accounts[0];
  const TOKENS = [
      "0xE345c48e422338D8557001B98Ad9feccD4135418", //LINK
      "0x4647B2ca28F96Cae17d8D7982d7014eb47C3979C", //SUSHI
      "0x55A6340034cB14E82976a215e458d2E1CBB04eF8" // VET
    ];
  const provider = ethers.providers.getDefaultProvider('http://localhost:8545');
  const user = await provider.getSigner();
 
  const test = async () => {
    const contract = new ethers.Contract(ADDR, ABI, user.provider);
    var result = [];
    var response = await contract.functions.getBalances(ADDRESS,TOKENS);
    
    for(var i = 0 ; i < TOKENS.length ; i++){
      
        var res = {
          token: response[0][i]['token'],
          balance: (response[0][i]['balance']).toString()
        }
        result.push(res);
    }
    return result;
};

it('testing the test', async() =>{
   var z = await test();
   console.log(z);
});

});  
