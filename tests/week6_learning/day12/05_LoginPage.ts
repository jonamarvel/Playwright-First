import { Page } from "@playwright/test";
import { BasePage } from "./05_basePage";

export class LTLoginPage extends BasePage{
    
    constructor(page:Page) {
        super(page);

    } 
    async login(username:string, password:string){
        await this.page?.locator("#username").fill(username);
        await this.page?.locator("#password").fill(password);
        await this.page?.locator(".decorativeSubmit").click();
        await this.page?.waitForTimeout(3000);
    }
    async isLoginErrorDisplayed(){
        if (await this.page?.locator("#errorDiv").filter({hasText: "The Following Errors Occurred:"}).isVisible()) {

            console.log("\nPlease check your user name or password\n");
            console.log(await this.page?.locator("#errorDiv").innerText());
        }
        else {

            console.log("\nLogin is successful\n");
            
        }
    }
}