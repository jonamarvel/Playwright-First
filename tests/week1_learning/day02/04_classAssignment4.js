/*
Classroom Assignment 2:

If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false
*/

let reverseName = ""
let myName = "Kiran"

function palindrome() 
{
    let myNameSplit=myName.split("")
    for(let i=myNameSplit.length-1;i>=0;i--)
    {
        reverseName=reverseName + myNameSplit[i]
    }
    console.log(reverseName)

if (reverseName === myName) {
    return ("Given string is a palindrome")
}    
else
{
    return("Given string is Not a palindrome")
}
}
let palindromeOrNot = palindrome(myName)
console.log(palindromeOrNot)