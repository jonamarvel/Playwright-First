/*
- for loop
- while 
- do, while
*/


// iterate through known number of times !
// coach --> start running every day for 5 rounds !!
// round -> 1, 2, 3, 4, 5 !  start - end 
// on particular day, you are not well, coach says --> run only 2 rounds !!


console.log("For Loop - Output")

let bhealth = true
for (let index = 1; index <= 5; index++) {

    if (!bhealth && index>2) {
        break;
        
    }
    console.log(index)

}

// while loop
// end ?? it is based on condition
// real-time example: wait until element becomes visible ! 1 sec - 30 sec !

console.log("While Loop - Output")
let bRaining=true;
while (!bRaining) {
    console.log("Keep running");
}


//do - while loop
//run at least one roung - warm that day
console.log("Do While Loop - Output")
let bPouring = true;
do {
console.log("Keep Walking")
}while (!bPouring)

// do condition will execute at least once 

// collect table data and click next (only if it enabled)

