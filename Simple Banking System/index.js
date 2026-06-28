// i think this will be where the import export stuff is

import {BankAccount} from "./bankAccount.js";


let user1 = new BankAccount("userName1",123456,7589.2);
let user2 = new BankAccount( "userName2",234567,0);
let user3 = new BankAccount("userName3",345678,0);
let user4 = new BankAccount("userName4",456789,0);

// deposit code


const defaultDisplay= document.getElementById("defaultDisplay");

const depositButton= document.getElementById("depositButton");

const inputFeild = document.getElementById("inputFeild");

let activeUser = user1;

depositButton.addEventListener("click",updateBalance);



function updateBalance(){

    let amount= parseFloat(inputFeild.value);

activeUser.deposit(amount);

return defaultDisplay.innerText = activeUser.balance;

};




// withdrawal code

const withdrawButton = document.getElementById("withdrawButton");

withdrawButton.addEventListener("click", balanceUpdate);



function balanceUpdate(){

    let amount= parseFloat(inputFeild.value);

activeUser.withdraw(amount);

return defaultDisplay.innerText = activeUser.balance;

};




// checkBalance code
let checkButton= document.getElementById("checkBalanceButton");
checkButton.addEventListener("click",balanceCheck);

 function balanceCheck(){
    
    // activeUser.checkBalance();

    defaultDisplay.innerText= activeUser.checkBalance();

    }