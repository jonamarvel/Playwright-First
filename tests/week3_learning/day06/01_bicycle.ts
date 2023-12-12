
//Define a class named Bicycle
class Bicycle {

//Properties
brand: string = 'Hero';
weight: number = 20.5;
isElectric: boolean = true;
isGearless: boolean = false;


//Methods
//Syntax for defining methods -> accessModifier methodName:returTypes
brake():void{
    //Local variables
    let model: number = 2020
    console.log(`Hello, My cycle brand is ${this.brand}`); // from class we can access the properties using 'this' keyword
    console.log(`The weight of the cycle is ${this.weight}`);
    console.log(`Is my cycle electric? ${this.isElectric}`);
    console.log(`Is my cycle gearless? ${this.isGearless}`);
    
    console.log(`The model of the bicycle is ${model}`);

}

ride():void{
    console.log(`The weight of the cycle is ${this.weight}`);
}

}

//Calling method - we need to use Object
//Syntax for creating object -> objectName = new className()
const myInstance = new Bicycle();
myInstance.brake();
myInstance.ride(); 

