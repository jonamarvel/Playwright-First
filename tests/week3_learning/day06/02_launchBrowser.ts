class LoginPage {
    
    browserName: string;
    browserVersion: number;
    url: string;

    // constructor with arguments
    constructor(bName:string, bVersion:number, URL:string){
        this.browserName = bName;
        this.browserVersion = bVersion;
        this.url = URL;
        console.log(`The Browser Details are ${bName}, ${bVersion}, ${URL}`)
    }
   /*  //constructor without arguments
    constructor(){
        this.browserName = 'chrome';
        this.browserVersion = 117;
        this.url = "http://leaftaps.com/opentaps/control/main";
        console.log(`The Browser Details are ${bName}, ${bVersion}, ${URL}`)
    } */
    public signUp(userName: string, password: string):string{
        return userName+" "+password;
        

    }
}

const myBrowser = new LoginPage('chrome', 117, "http://leaftaps.com/opentaps/control/main");
const cred = myBrowser.signUp("Demosalesmanager","crmsfa");
console.log(`The Credentials of Leaftaps page are ${cred}`);