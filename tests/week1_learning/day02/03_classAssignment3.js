/*

Classroom Assignment 1:

let yourName = "suresh";
write a function to reverse the string.

// hints
1) convert the input into characters
2) loop them in reverse direction
3) concate the string
4) print the new string

*/

let reverseName = ""

function reverseString(myName) {
    let myNameSplit=myName.split("")
    console.log("Given Name is : "+myName)
    console.log(myNameSplit.length)


    for(let i=myNameSplit.length-1;i>=0;i--)
    {
        reverseName=reverseName + myNameSplit[i]
    }
    return(reverseName)
}

let myName = "Kiran"
console.log(reverseString(myName))