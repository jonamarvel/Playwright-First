/*
2) Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sorted array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)
*/


const numbers = [2,4,7,8,11,14]
let target = 18
let answer = sumtwoNumbers(numbers,target)
console.log("Array indices that has matching target : "+target+" is "+answer)

function sumtwoNumbers(numbers, target)
{
    let sum=0
    let indArray =[]
for (let i= 0; i < numbers.length; i++) 
    {
        for (let j = 0; j< numbers.length; j++) 
            {
               sum = numbers[i]+numbers[j]
               if(sum===target)
               {
                indArray.push(i,j)
               }        
            }
        
    }
    return indArray
}