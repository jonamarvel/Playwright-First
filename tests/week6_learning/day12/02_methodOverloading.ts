class GrettinClass{
    //Overloading signature
    greet(name: string): string;
    greet(age: number): string;

    //Actual implementation
    greet(input:any): string{
        if(typeof(input) === "string"){
            return `Hello, Your name is ${input}!`;
        }
        else if (typeof(input) === "number") {
            return `Hello, Your age is ${input}!`;
        }
        return `Invalid input`;
    }
}
let greetObj = new GrettinClass();
console.log(greetObj.greet("Jona"));
console.log(greetObj.greet(36));
