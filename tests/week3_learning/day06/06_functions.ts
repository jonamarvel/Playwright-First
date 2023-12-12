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

import { setUncaughtExceptionCaptureCallback } from "process";

//Optional Parameters
//? shoulb be mentioned near optional parameter name
//Optional parameters should come after all mandatory parameters
function signUp(fName: string, lName: string, email: string, city?: string, age?: number) {
    console.log(`Sign up with ${fName}, ${lName}, ${email}, ${city}, ${age}`);
    
}

//signUp("Jona", "Marvel", "jonah.tsm@gmail.com", "Dubbo", 36 );
signUp("Jona", "Marvel", "jonah.tsm@gmail.com"); // call function without optional parameters


//Default Parameters (it should be defined at the end)
function type(password: string, userName: string = 'Demosalesmanager'): void{
    console.log(`Sign in using your username "${userName}" and password "${password}"`)
}

type("crmsfa");//To pass the parameters by skipping the default parameters

/* 

//functions overloading

Funct1 calcArea(shape, width, height)
Funct2 calcArea(shape, radius)

allow a single function to have mutiple signature 

*/

//Function Overload
function calculateArea(shape: "rectangle", width:number , height:number): number;
function calculateArea(shape: "circle", radius:number): number;

//Function Implementation
function calculateArea(shape: "rectangle"|"circle", widthOrRadius: number, height?: any): number{
    if (shape === "rectangle") {
        return widthOrRadius * height;
        
    }
    else {
        return Math.PI * Math.pow(widthOrRadius,2);
    }
}

//Function calls
const rectArea = calculateArea("rectangle", 5, 10);
const circleArea = calculateArea("circle", 3);
console.log(`Area of Rectangle is ${rectArea}`);
console.log(`Area of Circle is ${circleArea}`);