// SalesForce -Accounts (upload files)
// -----------------------------------
// 1.Login to Salesforce
// 2.Click on toggle menu
// 3.Search for Accounts
// 4.Click the Accounts
// 5.Click on the first resulting account name
// 6.Upload files under Notes and Attachments 
//   Hint : use page.focus(selector) to scroll to view the element - uploadfiles 
// 7.Verify the toast message

import { test, chromium, expect, errors } from "@playwright/test";
import path from "path";
import playwrightConfig from "../../playwright.config";
import { log } from "console";

test("Salesforce : To upload notes and attachments in Account",async ({page}) => {
//To login into Salesforce
await page.goto("https://login.salesforce.com/");
//To fill user name
await page.locator("#username").fill("jonamarvel@testleaf.com");
//To fill password
await page.locator("#password").fill("Testleaf123");
//To click login
await page.locator("#Login").click();
//To wait for page to load
await page.waitForLoadState("load");
//To Click on toggle menu
const appLauncherIcon = page.locator(".slds-icon-waffle");
try {
await expect(appLauncherIcon).toBeVisible();
await appLauncherIcon.click();
await page.locator(".slds-icon-waffle").click();
} catch (error) {
        //To print the error message
        console.log("The page is not loaded yet");
        console.log(error);
        await page.reload();
        await expect(appLauncherIcon).toBeVisible();
        await appLauncherIcon.click();
    }
//To wait for page to load
await page.waitForLoadState("load");
// 3.Search for Accounts
await page.locator('input[class="slds-input"]').fill("Accounts");
// 4.Click the Accounts
await page.locator('a[class="al-menu-item slds-p-vertical--xxx-small"]').click();
// 5.Click on the first resulting account name
await page.locator('a[data-aura-class="forceOutputLookup"]').first().click();
// 6.Upload files under Notes and Attachments 
const filechooserPromise = page.waitForEvent('filechooser', {timeout: 5000});
await page.getByRole('button', { name: 'Upload Files' }).click();
const fileChooser = await filechooserPromise;
await page.waitForTimeout(2000);
await fileChooser.setFiles(path.join(__dirname,'Salesforce_CheatSheets.pptx'));
await page.waitForTimeout(6000);
await page.getByRole('button', {name: "Done"}).click();
const toastMessage = await page.locator('span[class^="toastMessage"]').innerText();
console.log(`Toast message is : ${toastMessage}`);
expect(toastMessage).toBe("1 file was added to the Account.");
console.log("Toast message is verified");
const uploadedFileName = page.locator('div[class^="slds-show_inline-block"] span[data-aura-class="uiOutputText"]').first();
expect(uploadedFileName).toContainText("Salesforce_CheatSheets");
console.log(`\nYou have successfully uploaded the file : ${await uploadedFileName.innerText()}`);
console.log("File is uploaded successfully"); 
//await page.focus('div[class="slds-file-selector__dropzone"]');
//   Hint : use page.focus(selector) to scroll to view the element - uploadfiles 
// 7.Verify the toast message 
})
//1 file was added to the Account.