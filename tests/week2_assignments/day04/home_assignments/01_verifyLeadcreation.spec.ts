/* 
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/

import {chromium,expect,test } from "@playwright/test";

test ("To verify Lead Creation",async () => {
//To create the browser instance
const browser = await chromium.launch();
//To create browser context
const browsercontext = await browser.newContext();
//To create a page
const page = await browsercontext.newPage();
//To login into salesforce
await page.goto("https://login.salesforce.com")
await page.locator("#username").fill('jonamarvel@testleaf.com');
await page.locator("#password").fill("Testleaf123");
await page.locator("#Login").click();
//To Click on toggle menu button from the left corner
//await page.waitForLoadState('load');
await page.waitForLoadState('domcontentloaded');
await page.getByRole('button',{name : 'App Launcher'}).click();
//To Click view All and click Sales from App Launcher
await page.waitForLoadState('domcontentloaded');
await page.locator("text=View All").click();
await page.waitForLoadState('load');
//await page.getByRole('link',{name : 'Sales'}).click();
//const tile = await page.$('div[data-testid="your-tile-selector"]');
//await page.getByText('Sales').click()
const salesTile = page.locator('div[data-name="Sales"]')
await salesTile.click();
await page.waitForLoadState('domcontentloaded');
//To Click on Leads tab 
await page.getByRole('link', {name: 'Leads'}).click();
//const leadTab = page.locator('div[data-id="Lead"]');
//await leadTab.click();
await page.waitForLoadState('domcontentloaded');
//To Click on New button
await page.getByRole('button',{name: 'New'}).click();
await page.waitForLoadState('domcontentloaded');
//To Select Salutation dropdown
/* const comboBox= page.locator("button[name='salutation']");
await comboBox.click();
await page.click('div[title = "Mrs.")'); */ 
//To Enter the Last Name
await page.getByPlaceholder('Last Name').fill("Marvel");
//To Enter the CompanyName 
await page.locator("[name='Company']").fill("XYZ Company");
//To Click Save and Verify Leads name created
await page.locator("button[name='SaveEdit']").click();
await page.waitForLoadState('domcontentloaded');
const toastmessage = await page.waitForSelector('.forceVisualMessageQueue');

/* const title = await page.title();
console.log("\nPage Title is : "+title); */
if (toastmessage)
{
}
else
{
    console.log("\nLead creation is unsuccessful");
}

})
