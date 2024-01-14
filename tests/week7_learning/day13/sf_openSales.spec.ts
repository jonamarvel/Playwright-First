import { expect, test } from "@playwright/test";
//import { URLConstants } from "../../../constants/urlConstants";
import { FrameworkHelper } from "../../../utils/frameworkHelper";
import { envConstants } from "../../../constants/envConstants";
import { SFLoginPage } from "../../../page-objects/sfloginPage_POM";
import { SFHomePage } from "../../../page-objects/sfhomePage_POM";
import { AppConstants } from "../../../constants/appConstants";


test.describe("Salesforce - Opening Sales App",async () => {
    test(`TC001: Verify Login page and home page is loaded after successful login`,async ({page}) => {
        //await page.goto(URLConstants.Login_Page); //using page.goto and constant we can login into the page
        const loginPage = new SFLoginPage(page);
        //await loginPage.loadURL(URLConstants.Login_Page)//using base method and constant we can login into the page
        await loginPage.loadThePage();
        //await loginPage.verifyThePageIsLoaded(); // To verify the page is loaded from derived Login page 
        const appData = FrameworkHelper.loadTestData(envConstants.STAGE);
        await loginPage.doLogin(appData.adminUserName,appData.adminPassword); // From Framework Helper
        //await loginPage.doLogin("jonamarvel@testleaf.com","Testleaf123" ) // Hardcoded 
        //await loginPage.fillInUserName("jonamarvel@testleaf.com"); // Accessing method from POM folder to fill username
        //await loginPage.fillInPassword("Testleaf123"); // Accessing method from POM folder to fill password
        //await loginPage.clickOnLoginButton(); // Accessing method from POM folder to click on login button
        //await page.waitForTimeout(3000);
        await expect(page).toHaveURL(AppConstants.SF_INSTANCE_URL);
        const homePage = new SFHomePage(page);
        //await homePage.loadThePage();
        //await homePage.verifyThePageIsLoaded(); // To verify the page is loaded from derived Home page 
        await homePage.clickOnappLauncherIcon();
        await homePage.clickOnViewAllButton();
        await homePage.clickOnSalesTilesInAppLauncher();   
    })
})