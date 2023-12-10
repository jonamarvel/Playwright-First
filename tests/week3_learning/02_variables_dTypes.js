"use strict";
/*
let empName = "Jona";

empName = 23; //This is not allowed in Typescript(Static Typing - able to locate the error during compilation itself) but in JS (dynamic typing) it is allowed

var is not recommended in TS

//Variable declaration

let - mutable
-------------

let varName: datatype = value;

let name: string = 'Jona';

const - immutable
------------------
const age: number = 23;

* implicit type - you will  not explicitly mention the datatype
* explicit type - mentioning the datatype


//Data Types
1. string
2. number
3. boolean
4. null
5. undefined
6. any

*/
Object.defineProperty(exports, "__esModule", { value: true });
var empName = 'Jona'; // explicit type reference
console.log("\nEmployee Name is ".concat(empName));
var age = 23;
console.log("\nEmployee age is ".concat(age));
var browser1 = 'chrome'; //implicit type reference
console.log("\nThe browser name is ".concat(browser1));
var isTsInteresting = true;
console.log("\nisTsInteresting is ".concat(isTsInteresting));
var varName; //not defining
console.log("\nvarName is ".concat(varName));
var isSecured = null; //defining with empty value
console.log("\nisSecured is ".concat(isSecured));
var browserName;
browserName = 'chrome';
browserName = 112;
browserName = true;
console.log("\nThe browser name is ".concat(browserName));
var dimension = { height: 10, width: 20 };
console.log("\nExample for customized data type : ".concat(dimension.height, " and ").concat(dimension.width));
//Syntax for function declaration - function functionName(arguments: datatype):returntype{}
function invokeBrowser(browserName) {
    if (browserName === 'Chrome') {
        console.log("\nLaunch Chrome Browser");
    }
    else {
        console.log("\nLaunch Firefox Browser");
    }
}
invokeBrowser("Chrome");
