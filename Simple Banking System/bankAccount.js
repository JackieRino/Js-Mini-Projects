export class BankAccount {
    constructor (accountHolder,accountNumber,balance){

        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;

    }//end of constructor function
 

        deposit(amount){

        this.balance += amount;                        

        console.log(`${amount} deposited. Current Balance: ${this.balance}.`);
        }

        withdraw(amount){

          this.balance -= amount;
          
          console.log(`${amount} withdrawn. Current Balance: ${this.balance}.`);
        }

        checkBalance(){           
         return this.balance;
         
         console.log(`Current Balance: ${this.balance}`);
        }

}
