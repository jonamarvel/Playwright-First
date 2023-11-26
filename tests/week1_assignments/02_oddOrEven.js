/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function oddOrEven(givenNumber) {
    if (givenNumber%2 == 0) {

        console.log("The given number "+givenNumber+" is divisible by 2, hence the number is Even Number.")
        
    }
    else
    {
        console.log("The given number "+givenNumber+" is not divisible by 2, hence the number is Odd Number.")
    }
}

let givenNumber=10000098.08
oddOrEven(givenNumber)
