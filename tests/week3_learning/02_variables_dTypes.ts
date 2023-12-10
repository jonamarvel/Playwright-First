
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

import { log } from "console";

let empName: string = 'Jona'; // explicit type reference
console.log(`\nEmployee Name is ${empName}`);

const age: number = 23;
console.log(`\nEmployee age is ${age}`);

let browser1 = 'chrome'; //implicit type reference
console.log(`\nThe browser name is ${browser1}`);

let isTsInteresting = true;
console.log(`\nisTsInteresting is ${isTsInteresting}`);

let varName: undefined; //not defining
console.log(`\nvarName is ${varName}`);

let isSecured: null = null; //defining with empty value
console.log(`\nisSecured is ${isSecured}`);

let browserName: any;
browserName = 'chrome';
browserName = 112;
browserName = true;
console.log(`\nThe browser name is ${browserName}`);

//To customize our own data type - Method 1
type Point ={
    height: number
    width: number
}

let dimension:Point = {height:10, width:20}
console.log(`\nExample for customized data type : ${dimension.height} and ${dimension.width}`);

//custom the datatype - Method 2
 
type supportedBrowser = "Chrome" | "Firefox"; // | and 

//Syntax for function declaration - function functionName(arguments: datatype):returntype{}

function invokeBrowser(browserName: supportedBrowser):void {
    if (browserName === 'Chrome'){
        console.log("\nLaunch Chrome Browser");
        
    } else {
        console.log("\nLaunch Firefox Browser");
    }
}

invokeBrowser("Chrome");

