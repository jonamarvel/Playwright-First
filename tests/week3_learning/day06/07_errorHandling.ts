
import { Browser } from "./04_interface";

class OpenChrome implements Browser {
    //browserName: string;
    browserName: string = 'chrome';
    startApp(): void {
        console.log("Launch the Chrome Browser.");
    }
    loginCredentials(userName: string, password: string): string {
        return userName+" "+password;
    }
    getStatus(): boolean {
        return true;
    }

}
const myChrome = new OpenChrome();
console.log(myChrome.browserName);
try{
myChrome.startApp();
console.log(myChrome.loginCredentials('Demosalesmanager', 'crmsfa'));
console.log(myChrome.getStatus());
} catch (error) {
    console.log("Failed to open chrome");
}
