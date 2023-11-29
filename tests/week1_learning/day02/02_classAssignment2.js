/*
Classroom 2

int val = 5;
funtion to sum all the values between 1 to n 
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, i need the sum !! 

*/

function sumOfNumbers(givenNumber) 
{
    let sum=0;
    for (let i = 0; i <= givenNumber; i++)  
    {
    
        sum=sum+i;
    
    }
    return sum;
}

let givenNumber=7
let finalSum=sumOfNumbers(givenNumber)
console.log("Given Number is :"+ givenNumber)

console.log("And the sum of all the numbers from 1 to given number "+givenNumber+" is "+finalSum)