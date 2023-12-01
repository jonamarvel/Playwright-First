let type;

function orderBriyani(){
    console.log("Type of briyani ordered ");
    // action -- kitchen -- 5 seconds 
    // sleep for 5 seconds
    setTimeout(() => {
        console.log("Briyani is getting prepared")
        type = "mushroom";
    }, 5000);
    console.log("Briyani delivered");
    return type;
}

const briyani = orderBriyani();
console.log("Eat the "+ briyani+" briyani");