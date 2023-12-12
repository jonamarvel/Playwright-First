/*
Class : Shopping Cart

Methods : 
--> Methods with no arguments
addItem() //public
removeItem() //private 

--> Method with arguments 
checkout() -> accountName, cardNumber

create an instance for the class and call the method
*/

class ShoppingCart{

    addItem(){
        let addedItem:string = 'Handbag';
        console.log(`Your item ${addedItem} is added`);

    }
    private removeItem(){
        let removedItem:string = 'Watch';
        console.log(`Your item ${removedItem} is removed`);

    }
    checkOut(accountName:string, cardNumber: number):string{
        return accountName+" "+cardNumber
    }

}

const myShopping = new ShoppingCart();
myShopping.addItem();
//myShopping.removeItem();
const accountDetails = myShopping.checkOut('Personal account', 23234443);
console.log("My account details are "+accountDetails);