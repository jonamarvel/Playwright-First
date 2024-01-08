import { Page, Locator, test, expect } from "@playwright/test";

type LocateByType = Locator | string;

export abstract class SFBasePage{

    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    constructLocatorBasedOnSelector(selector:string){
        return this.page.locator(selector);
    }
    //To generate the locator using wrapper method
    generateLocator(locateBy:LocateByType){

        /*  
        let locatorToClick: Locator;

         //Checking the type of the web element
             if(typeof(locateBy) === 'string'){
                    //I need to construct the locator based on selector
                    locatorToClick = this.page.locator(locateBy);
                 }
            else{
                    locatorToClick = locateBy;
                }
                return locatorToClick;
        */
        //To return in simple if else block(instead of above if else block) using ternary operator (?)
        return typeof(locateBy)==="string"?this.constructLocatorBasedOnSelector(locateBy):locateBy;
    }

    async loadURL(url: string){
        await this.page.goto(url);

    }

    abstract loadThePage():Promise<void>;
    
    abstract verifyThePageIsLoaded():Promise<void>; 

    async verifyTheLocatorIsVisible(locateBy: LocateByType){
        await expect(this.generateLocator(locateBy)).toBeVisible();
    }

    async fillin(locateBy: LocateByType, textToFill:string){
        await this.generateLocator(locateBy).fill(textToFill);
    }

    async clickOn(locateBy: LocateByType){
    //Telling my  method that you need to first construct the locator and click on it
    //if it is not a string, just click on the locator
    // let locatorToClick: Locator = this.generateLocator(locateBy);
       try {
            // await locatorToClick.click();
            await this.generateLocator(locateBy).click();

        } catch (error) {
            console.log(`Error message : ${error}`);
        } 
        
    }

    
}