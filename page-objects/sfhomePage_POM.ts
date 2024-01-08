import { Locator, Page, expect } from "@playwright/test";
import { SFBasePage } from "./sfbasePage_POM";
import { URLConstants } from "../constants/urlConstants";

export class SFHomePage extends SFBasePage{


    //readonly page: Page;
    static pageURL = URLConstants.Login_Page;
    readonly appLauncherIcon : Locator;
    readonly viewAllButton: Locator;
    readonly salesTilesAppLauncher: Locator;
    readonly pageAnchor: Locator;
  

    constructor(page: Page){
        super(page);
        this.appLauncherIcon = this.page.locator(".slds-icon-waffle");
        this.viewAllButton = this.page.getByLabel('View All Applications');
        this.salesTilesAppLauncher = this.page.locator('one-app-launcher-app-tile[data-name="Sales"]');
        this.pageAnchor = this.page.locator(".tileTitle").filter({hasText:"Get Started with Einstein Bots"});
        //this.pageAnchor = this.page.locator('span[class="text uiOutputText"]').filter({hasText:"Get Started with Einstein Bots"});
    }
/*     
We will get error when we re define the constructor here agin in derived class like below, so we can use the super keyword inside constructor to access the properties of base class
constructor(page: Page){
        this.page = page;
        //declare locator names
        this.appLauncherIcon = this.page.locator(".slds-icon-waffle");
        this.viewAllButton = this.page.getByLabel('View All Applications');
        this.salesTilesAppLauncher = this.page.locator('one-app-launcher-app-tile[data-name="Sales"]');
    } */
    //define locators
    //page methods
    async loadThePage(){
        await this.loadURL(SFHomePage.pageURL);
        await this.verifyThePageIsLoaded();
        
    }
    async verifyThePageIsLoaded(): Promise<void> {
        //await expect(this.pageAnchor,`expect page anchor to be visible`).toBeVisible();
        await this.verifyTheLocatorIsVisible(this.pageAnchor);
    }
    async clickOnappLauncherIcon(){

        await this.clickOn(this.appLauncherIcon);

    }
    async clickOnViewAllButton(){

        await this.clickOn(this.viewAllButton);

    }
    async clickOnSalesTilesInAppLauncher(){

        await this.clickOn(this.salesTilesAppLauncher);

    }
}