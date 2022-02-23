$(document).ready(function () {
    menu();
});

function menu(){
    var buttonTxt;
    if(localStorage.getItem("loggedIn")){
        buttonTxt = "Wallet Connected";
    }
    else{
        buttonTxt = "Connect Metamask Wallet";
    }

    var menu = `
       <button type="button" onclick=start()>${buttonTxt}</button>
    `;

    $('#menu').html(menu);
}

function start(){
    console.log("Inside start: " + localStorage.getItem("lastname"));
    if(localStorage.getItem("loggedIn")){
        menu();
        return true;
    }
    window.ethereum.enable().then((accounts)=>{
        localStorage.setItem("loggedIn", "true");
        menu();
        // instance = new web3.eth.Contract(abi.kittyContract,contractAddress,{from: accounts[0]});
        // marketInstance = new web3.eth.Contract(abi.kittyMarketPlace,marketAddress,{from: accounts[0]});
        user = accounts[0];
        console.log("user: "+ user);
    });
}