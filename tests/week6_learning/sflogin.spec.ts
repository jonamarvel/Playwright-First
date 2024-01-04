import { expect, test } from "@playwright/test";
import { LoginPage } from "../../page-objects/sfloginPage_POM";
import { AppConstants } from "../../constants/appConstants";

const sfURL = AppConstants.SALESFORCE_URL;

test.describe("Salesforce Login",async () => {
    test(`TC001: Verify with valid credentials`,async ({page}) => {
        await page.goto(sfURL);
        const loginPage = new LoginPage(page);
        await loginPage.doLogin("jonamarvel@testleaf.com","Testleaf123" )
        //await loginPage.fillInUserName("jonamarvel@testleaf.com");
        //await loginPage.fillInPassword("Testleaf123");
        //await loginPage.clickOnLoginButton();
        await expect(page).toHaveURL(AppConstants.SF_INSTANCE_URL);
        
    })

    
})