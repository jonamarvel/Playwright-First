//Define a class named Bicycle
var Bicycle = /** @class */ (function () {
    function Bicycle() {
        //Properties
        this.brand = 'Hero';
        this.weight = 20.5;
        this.isElectric = true;
        this.isGearless = false;
    }
    //Methods
    //Syntax for defining methods -> accessModifier methodName:returTypes
    Bicycle.prototype.brake = function () {
        //Local variables
        var model = 2020;
        console.log("Hello, My cycle brand is ".concat(this.brand)); // from class we can access the properties using 'this' keyword
        console.log("The weight of the cycle is ".concat(this.weight));
        console.log("Is my cycle electric? ".concat(this.isElectric));
        console.log("Is my cycle gearless? ".concat(this.isGearless));
        console.log("The model of the bicycle is ".concat(model));
    };
    return Bicycle;
}());
//Calling method - we need to use Object
//Syntax for creating object -> objectName = new className()
var myInstance = new Bicycle();
myInstance.brake();
