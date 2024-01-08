import { expect, test } from "@playwright/test";
import { SFLoginPage } from "../../../page-objects/sfloginPage_POM";
import { AppConstants, ToggleStates } from "../../../constants/appConstants";
import { FrmaeworkHelper } from "../../../utils/frameworkHelper";
import { envConstants } from "../../../constants/envConstants";
import { URLConstants } from "../../../constants/urlConstants";

//const sfURL = AppConstants.SALESFORCE_URL;

test.describe("Salesforce Login",async () => {
    test(`TC001: Verify with valid credentials`,async ({page}) => {
        await page.goto(URLConstants.Login_Page);
        const loginPage = new SFLoginPage(page);
        const appData = FrmaeworkHelper.loadTestData(envConstants.STAGE);
        await loginPage.doLogin(appData.adminUserName,appData.adminPassword); // From Framework Helper
        //await loginPage.doLogin("jonamarvel@testleaf.com","Testleaf123" ) // Hardcoded 
        //await loginPage.fillInUserName("jonamarvel@testleaf.com"); // Accessing method from POM folder to fill username
        //await loginPage.fillInPassword("Testleaf123"); // Accessing method from POM folder to fill password
        //await loginPage.clickOnLoginButton(); // Accessing method from POM folder to click on login button
        await expect(page).toHaveURL(AppConstants.SF_INSTANCE_URL);
        
    })

    
})

/* function doToggle(toggleState: ToggleStates){
    if(toggleState === ToggleStates.ON){
        //Perform the action to enable the toggle button
    }
    else{
        //Perform the action to disable the toggle button
    }

} */