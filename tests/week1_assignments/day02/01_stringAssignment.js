/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

//Example 1 :
let givenString1= "Hello World"
let totalLenght=givenString1.length
console.log('Example 1 :')
console.log('Given String : '+givenString1)
let splitString1 = givenString1.split(' ')
//console.log(splitString1)
//console.log(typeof(splitString))
//console.log(splitString.length)
lengthLast1 = splitString1[splitString1.length-1].length
console.log("Length of the last word '"+splitString1[splitString1.length-1]+"' of given string is : "+lengthLast1)

//Example 2:
let givenString2= "   fly me   to   the moon  "
let totalLenght2=givenString2.length
console.log('Example 2 :')
console.log('Given String : '+givenString2)
let trimString2=givenString2.trim()
console.log('Trim of Given String : '+trimString2)
let splitString2 = trimString2.split(' ') 
//console.log(typeof(splitString2))
//console.log(splitString2.length)
lengthLast2 = splitString2[splitString2.length-1].length
console.log("Length of the last word '"+splitString2[splitString2.length-1]+"'of given string is : "+lengthLast2)


//Example 3:

console.log("Example 3: ")

let str1 = "silent"
let str2 = "listen"

isAnagram(str1,str2)

function isAnagram(str1,str2)
{
let splitStr1=str1.split('')
console.log(splitStr1)
let splitStr2=str2.split('')
console.log(splitStr2)

let sortsplitStr1=splitStr1.sort()
console.log(sortsplitStr1)

let sortsplitStr2=splitStr2.sort()
console.log(sortsplitStr2)

let joinstr1 = sortsplitStr1.join('')
console.log(joinstr1)

let joinstr2 = sortsplitStr2.join('')
console.log(joinstr2)
    if (joinstr1===joinstr2) {
        console.log("Both strings are anagram")
        
    } else {
        console.log("Both strings are not anagram")
    }
}


