export class LoginPage{
    usernameField: string;
    passwordField: string;
    loginButton: any;

    //Constructor
    constructor(){
        this.usernameField = "#username";
        this.passwordField = "#password";
        this.loginButton = "#Login";
    }
    //Method to Login (Async)
    async login(page:any, username: string, password: string){
        await page.fill(this.usernameField, username);
        await page.fill(this.passwordField, password);
        await page.click(this.loginButton);
    }
}