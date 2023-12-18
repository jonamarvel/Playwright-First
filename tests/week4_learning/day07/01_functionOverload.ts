//Either number of arguments or dat type of argument is different

function openApp(): void; //open the chrome browser and leadtaps application by default
function openApp(url:string): void; //this will be open the given url and in chrome
function openApp(url:string, browser:string):void;//you will pass which browse and which url open

function openApp(url?:string, browser?:string):void{
    //launch the deafult browser --> chrome
    //load the URL --> leaftaps application
}

//Best Practice : Do not creat function or method more than 3-4 arguments