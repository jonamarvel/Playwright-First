"use strict";
/*

function - can take arguments
default arguments
optional arguments
/Inside signup page/
firstname (mandatory)
lastname (mandatory1)
email (mandatory)
city (optional)
age (optional)

 */
Object.defineProperty(exports, "__esModule", { value: true });
//Optional Parameters
//? shoulb be mentioned near optional parameter name
//Optional parameters should come after all mandatory parameters
function signUp(fName, lName, email, city, age) {
    console.log("Sign up with ".concat(fName, ", ").concat(lName, ", ").concat(email, ", ").concat(city, ", ").concat(age));
}
//signUp("Jona", "Marvel", "jonah.tsm@gmail.com", "Dubbo", 36 );
signUp("Jona", "Marvel", "jonah.tsm@gmail.com"); // call function without optional parameters
//Default Parameters (it should be defined at the end)
function type(password, userName) {
    if (userName === void 0) { userName = 'Demosalesmanager'; }
    console.log("Sign in using your username \"".concat(userName, "\" and password \"").concat(password, "\""));
}
type("crmsfa"); //To pass the parameters by skipping the default parameters
//Function Implementation
function calculateArea(shape, widthOrRadius, height) {
    if (shape === "rectangle") {
        return widthOrRadius * height;
    }
    else {
        return Math.PI * Math.pow(widthOrRadius, 2);
    }
}
//Function calls
var rectArea = calculateArea("rectangle", 5, 10);
var circleArea = calculateArea("circle", 3);
console.log("Area of Rectangle is ".concat(rectArea));
console.log("Area of Circle is ".concat(circleArea));
