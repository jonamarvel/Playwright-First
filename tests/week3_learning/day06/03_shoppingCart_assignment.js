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
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    ShoppingCart.prototype.addItem = function () {
        var addedItem = 'Handbag';
        console.log("Your item ".concat(addedItem, " is added"));
    };
    ShoppingCart.prototype.removeItem = function () {
        var removedItem = 'Watch';
        console.log("Your item ".concat(removedItem, " is removed"));
    };
    ShoppingCart.prototype.checkOut = function (accountName, cardNumber) {
        return accountName + " " + cardNumber;
    };
    return ShoppingCart;
}());
var myShopping = new ShoppingCart();
myShopping.addItem();
//myShopping.removeItem();
var accountDetails = myShopping.checkOut('Personal account', 23234443);
console.log("My account details are " + accountDetails);
