const Main = artifacts.require('MainContract');
const Link = artifacts.require('Link');
const Sushi = artifacts.require('Sushi');
const Vechain = artifacts.require('Vechain');

contract('Getting all token balance of a wallet address', async(accounts) => {
    let main;
    let link;
    let sushi;
    let vet;

 before(async () => {
    main = await Main.deployed();
    link = await Link.deployed();
    sushi  = await Sushi.deployed();
    vet = await Vechain.deployed();
 });

 it('Checking the balance retrieval function', async()=>{

   var tokenAddresses = [link.address, sushi.address, vet.address];
   var response = await main.getBalances(accounts[0],tokenAddresses,{from: accounts[0]});
   console.log(response);
  
 });

});