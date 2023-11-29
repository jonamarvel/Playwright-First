/*
Find the number of occurances.  // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count
*/


const numbers = [2,4,5,2,1,2]
let givenNumber = 2
let count=0

function countOccurences(givenNumber)
{
  
for (let i= 0; i<numbers.length; i++) {
    if (numbers[i]===givenNumber) {
      
        count++
        
    }
}
return(count)
}
let finalCount = countOccurences(givenNumber)
console.log("The number of occurences of given number "+givenNumber+" is "+finalCount)