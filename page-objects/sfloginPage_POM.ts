import { test, Locator, Page } from "@playwright/test";

export class LoginPage{
    //blue print - properties
    readonly usernameInputBox: Locator;
    readonly passwordInputBox: Locator;
    readonly loginButton: Locator;
    page: Page;
    
    //Constructor
    constructor(page:Page){
        /*
        userName = page.locator("selector")
        */
        this.page = page;
        this.usernameInputBox = this.page.locator("#username");
        this.passwordInputBox = this.page.locator("#password");
        this.loginButton = this.page.locator("#Login");

    }
    //Method to fill usernmae and password and click on login button (Async)
    public async fillInUserName(uname:string){
        //for reporting purpose
        await test.step(`Filling user name with ${uname}`,async () => {
            await this.usernameInputBox.fill(uname);
        })
        
    }
    public async fillInPassword(password:string){
        await test.step(`Filling password with ${password}`,async () => {
            await this.passwordInputBox.fill(password);
        })
        
    }
    private async clickOnLoginButton(){
        await test.step(`Clicking on the Login button`,async () => {
            await this.loginButton.click();
        })
    }
    public async doLogin(uname:string, password:string){
        await this.fillInUserName(uname);
        await this.fillInPassword(password);
        await this.clickOnLoginButton();
    }
}