
//We can add export before each interface to export into a class 

interface Browser{
    undefVariable:undefined;
    browserName: string;
    startApp(): void; //unimplemented method - can not have any method body
    loginCredentials(userName:string, password:string):string;
    getStatus(): boolean;

}
// const myInterface = new Browser ()//We can not create a object for Interface

interface Button{
    click():void;
}

//To export more than one interface
export {Browser, Button};
