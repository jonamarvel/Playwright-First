/*

Arrays -> 0 index
Dynamically change and store multiple data

*/

let supportedBrowsers = []
console.log(supportedBrowsers.length)

let browserNames=["chrome","firefix","microsoft edge"]
console.log(browserNames.length)
console.log(browserNames[2]) // microsoft edge
console.log(browserNames[32]) //undefined

browserNames[5]="opera"
console.log(browserNames[5])//opera
console.log(browserNames.length) //6
console.log(browserNames[4]) //undefined

/*
Mixed Bag
*/

const mixedBags = [1,2,5,'chrome','firefox','safari',[8,9,10],true,false,['smoke','sanity']]

console.log(mixedBags.length)
console.log(mixedBags[9]
    )
// String to array

let allBrowsers = "chrome,edge,firefox"
console.log("\nGiven String : " + allBrowsers)
let browsers=allBrowsers.split(",")
console.log("Converted array : " + browsers)
console.log("Type of converted array : " + typeof browsers)

//Array to String 
console.log("\nGiven Array :"+browsers)
let conString = browsers.join("-")
console.log("Converted String :" + conString)
console.log("Type of converted string : " + typeof conString)

// Add and remove at the last index (push in at the end and pop out from the end)
let colours=['green','yellow','orange']
console.log("\nGiven Colours :"+colours)
colours.push('blue')
console.log("All colours after adding blue : "+colours)

console.log("Removed color : "+colours.pop())
console.log("Removed color : "+colours.pop())
console.log("All colours after removing : "+colours)

// Add or remove from the start of an array (unshift in at the front and shift out from the front)
console.log("\nGiven Colours : "+colours)
console.log(colours.unshift('purple'))
console.log("Given Colours after adding in the start : "+colours)
console.log(colours.shift())
console.log("Given Colours after removing in the start : "+colours)


//sort an array
console.log("\nGiven Colours : "+colours)
console.log(colours.unshift('black','white','indigo'))
console.log("Colours after adding : "+colours)
console.log("Colour after sorting :" + colours.sort())

let numbers =[2,6,19,3004,543]
console.log("\nGiver Numbers :" + numbers)
console.log("Numbers after sorting : " + numbers.sort()) // it considers all numbers as string


// Spread Syntax
let arr1=[6,9,12]
let arr2=[...arr1,'a','b','c']
console.log("\nThe new array : "+ arr2)
