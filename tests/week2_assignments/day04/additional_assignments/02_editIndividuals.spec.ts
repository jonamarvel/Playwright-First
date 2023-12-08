/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

import { test, chromium } from "@playwright/test";
test("Salesforce : To Edit Individual",async () => {

    //To launch the browser instance
    const browser = await chromium.launch();
    //To launch the browser context
    const browserContext = await browser.newContext();
    //To launch the browser page
    const page = await browserContext.newPage();
    //To launch the Salesforce url
    await page.goto("https://login.salesforce.com"); 
    //To enter the username
    await page.locator("#username").fill('jonamarvel@testleaf.com');
    //To enter the password
    await page.locator("#password").fill('Testleaf123');
    //To login into Salesforce
    await page.locator("#Login").click();
    //To Click on the toggle menu button from the left corner
    await page.waitForLoadState('domcontentloaded');
    await page.locator(".slds-icon-waffle").click();
    await page.waitForLoadState('domcontentloaded');
    //To  Click View All and click Individuals from App Launcher
    await page.getByLabel('View All Applications').click();
    //To Click on Individuals 
    await page.waitForLoadState('domcontentloaded');
    await page.locator('.al-tab-item').nth(60).click();
    //To Click on the Individuals tab 
    //Search the Individuals last name
    await page.getByPlaceholder("Search this list...").fill("reredind");
    await page.keyboard.press("Enter");
    //To Click on the Dropdown icon and Select Edit
    await page.waitForLoadState('domcontentloaded');
    await page.locator("span[class$='spread'] div[class*= forceVirtualAction] a[role=button]").nth(0).click() // Working
    //await page.locator("span[class$='spread'] div[class=uiPopupTrigger] a[role=button]").click(); //Not working
    //await page.locator("//div[@class='uiPopupTrigger']").click(); //Not Working
    //await page.locator("td[class='slds-cell-edit cellContainer slds-has-focus']").click(); //Not working
    //await page.locator(".slds-cell-edit cellContainer slds-has-focus").click();//Not Working
    //await page.locator("a[title='Show 2 more actions']").click(); //Not Working
    //await page.getByTitle('Show 2 more actions', {exact: true}).click(); //Not Working
    await page.locator("a[title='Edit']").click();
    //To Select Salutation as 'Mr'
    await page.locator("div[class^=salutation] div[class=uiPopupTrigger] a[role=button]").click();
    await page.locator("a[title='Mr.']").click();
    //To get the First name before updating with new value
    const firstNameold = await page.getByPlaceholder("First Name").inputValue();
    //Now enter the first name
    await page.getByPlaceholder("First Name").fill("Jona");
    //To Click on Save and Verify the first name 
    await page.getByTitle('Save', {exact: true}).click(); 
    const updatedValue = await page.locator('div[data-aura-class="forceToastMessage"]').innerText();
    console.log(updatedValue.split(" "));
    let toastArray = updatedValue.split(" ");
    const updatedFirstName = toastArray[1];
    //const firstNamenew = await page.locator('a[data-aura-class="forceOutputLookup"]').nth(0).textContent();
   /*  await page.waitForSelector('a[data-aura-class="forceOutputLookup"]');
    const updatedValue = await page.$eval('a[data-aura-class="forceOutputLookup"]', element => element.textContent); */
    //const firstNamenew = await page.locator("th[class^=slds-cell-edit] span[class$= forceInlineEditCell] span[class$= forceOutputLookup]").innerText();//Not Working
    console.log(`\nFirst Name is edited successfully from ${firstNameold} to ${updatedFirstName}`);

})