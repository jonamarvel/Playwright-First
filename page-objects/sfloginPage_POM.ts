import { test, Locator, Page, expect } from "@playwright/test";
import { SFBasePage } from "./sfbasePage_POM";
import { URLConstants } from "../constants/urlConstants";
//import { LoginPage } from "../tests/week6_learning/day11/sfLoginPage";

export class SFLoginPage extends SFBasePage{
    //blue print - properties
    //To define the pageURL of login page
    static pageURL = URLConstants.Login_Page;
    //To define locators name
    readonly usernameInputBox: Locator;
    readonly passwordInputBox: Locator;
    readonly loginButton: Locator;
    //To define page
    //page: Page;
    
    //Constructor
    constructor(page:Page){
        super(page);
        //this.page = page;
        //To declare locators
        this.usernameInputBox = this.page.locator("#username");
        this.passwordInputBox = this.page.locator("#password");
        this.loginButton = this.page.locator("#Login");

    }

    async loadThePage(){
        await this.loadURL(SFLoginPage.pageURL);
        await this.verifyThePageIsLoaded();
        
    }

    async verifyThePageIsLoaded(): Promise<void> {
        //await expect(this.usernameInputBox,`expect user input box to be visible`).toBeVisible();
        await this.verifyTheLocatorIsVisible(this.usernameInputBox);
    }

    //Method to fill usernmae and password and click on login button (Async)
    public async fillInUserName(uname:string){
        //for reporting purpose
        await test.step(`Filling user name with ${uname}`,async () => {
            //await this.usernameInputBox.fill(uname);
            await this.fillin(this.usernameInputBox, uname);
        })
        
    }
    public async fillInPassword(password:string){
        await test.step(`Filling password with ${password}`,async () => {
            //await this.passwordInputBox.fill(password);
            await this.fillin(this.passwordInputBox, password);
        })
        
    }
    private async clickOnLoginButton(){
        await test.step(`Clicking on the Login button`,async () => {
            await this.clickOn(this.loginButton);
        })
    }
    public async doLogin(uname:string, password:string){
        await this.fillInUserName(uname);
        await this.fillInPassword(password);
        await this.clickOnLoginButton();
    }
    async clickOnByLocator(findLocatorBy: Locator){
        await findLocatorBy.click();
    }
    async clickOnBySelector(selector: string){
       await this.page.locator(selector).click();
    }
}