import { test } from "@playwright/test";
test(`Salesforce : Login with Storage State}`, async ({page}) => {
    //To login into Salesforce
    await page.goto("https://login.salesforce.com/");
    //To fill user name
    await page.locator("#username").fill("jonamarvel@testleaf.com");
    //To fill password
    await page.locator("#password").fill("Testleaf123");
    //To click login
    await page.locator("#Login").click();
    await page.locator(".slds-icon-waffle").click();
    await page.getByText("View All").click();
    await page.context().storageState({path:"creds/sf-login-storage.json"})

})