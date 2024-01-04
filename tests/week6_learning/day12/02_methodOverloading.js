var GrettinClass = /** @class */ (function () {
    function GrettinClass() {
    }
    //Actual implementation
    GrettinClass.prototype.greet = function (input) {
        if (typeof (input) === "string") {
            return "Hello, Your name is ".concat(input, "!");
        }
        else if (typeof (input) === "number") {
            return "Hello, Your age is ".concat(input, "!");
        }
        return "Invalid input";
    };
    return GrettinClass;
}());
var greetObj = new GrettinClass();
console.log(greetObj.greet("Jona"));
console.log(greetObj.greet(36));
