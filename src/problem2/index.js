"use strict";
var web3; 
var instance;
var user;

$(document).ready(()=>{
    window.addEventListener('load', function () {
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            web3 = window.web3;
            ethereum.enable().then(() => {
                    console.log("Ethereum enabled");

                    web3.eth.getAccounts(function (err, acc) {
                        if (err != null) {
                            self.setStatus("There was an error fetching your accounts");
                            return;
                        }
                        if (acc.length > 0) {
                            user = acc[0];
                            console.log(acc);
                        }
                        console.log("user: "+ user);
                        menu();
                    });
                })
                .catch(() => {
                    console.warn('User didn\'t allow access to accounts.');
                   
                });
        } else {
            console.log("Non-Ethereum browser detected. You should consider installing MetaMask.");
        }
    });
});

$('#tokens').click(async function (e){
    e.preventDefault();
    var amount = $('#input-amount').val();
    var address = $('#input-address').val();
    console.log(amount + "  "+ address);
    var checkAddress = web3.utils.isAddress(address.toString());
    if(!checkAddress){
        $('#address-text').text('Invalid Address');
        $('#address-text').css("color","red");
        return;
    }
    const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
    var userBalance = web3.eth.getBalance(address.toString());

    if(userBalance >= amountToSend){
        var send = await web3.eth.sendTransaction({ from: user, to: address, value: amountToSend });
        if(send){
            console.log("Done");
        }
    }
    else{
        alert('Insufficient Balance');
    }
    

})

$('#input-address').on("change keyup paste click", function(){
    $('#address-text').text('');
});

function getOTP(){
    const val = Math.floor(1000 + Math.random() * 9000);
    $('#input-otp').val(`${val}`);
    console.log(val);
}