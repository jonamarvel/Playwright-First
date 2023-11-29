/*

string - data type used to hold a sequence of characters

*/

let myName = "My Name is Jona" //primitice or literal
let mybrowserName= new String("Chrome") // String Object
console.log(myName)

//we can use both single quote and double quotes to mention the string values
let myNation = "I'am from India"
let mySurname = 'My father\'s name is Marvel Nayagam' // use backward slash when using the single quote inside the string value while mentioning the string value with single quotes

console.log(myNation)
console.log(mySurname)

//Concatenation - There are two ways => one with using + and another with using `` and ${}backtick
let testcaseID = "TC01"
let testcaseName = "\"Create new Register Change record\""
let result = testcaseID+" - "+testcaseName+" has been passed sucessfully"
console.log(result)


let testcaseCount = 24
console.log(`There are ${testcaseCount} testcasese passed in the first test cycle execution`) //ES6 - 2015

// How do we get the count of characters in the string?
// property --> const --> O(1)
// method() --> execute and find a value

let char = "The total number of testcases for Regression Testing is 589"
let charlength = console.log('Number of characters in the string "'+char+'" is '+char.length)

// find the first character of the given String
let testcaseDesc = "R_Sanity Test"
console.log(`The first character of string "${testcaseDesc}" is ${testcaseDesc.charAt(0)}`)

//to find the last character
console.log(`The last character of string "${testcaseDesc}" is ${testcaseDesc.charAt(testcaseDesc.length-1)}`)


//index of the character
console.log(`The index of the character "S" in the string "${testcaseDesc}" is ${testcaseDesc.indexOf('S')}`)


let myFirstName = "Jona"
console.log(myFirstName.indexOf(3)) //If it does not matching any values then it will return -1


//Upper Case and Lower Case
console.log(myFirstName.toLowerCase())
console.log(myFirstName.toUpperCase())


//Slice and Split

console.log(myFirstName.slice(0,2))

let splitChar = myFirstName.split("")
console.log(splitChar)





