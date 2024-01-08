import { chromium, test } from "@playwright/test";


// Precondition - make sure that you marked    trace: 'off', in playwright.config.ts

test ("To login into Salesforce",async () => {
const browser = await chromium.launch();
const context = await browser.newContext();

//To start the tracking
await context.tracing.start({screenshots: true, sources: true});
const page = await context.newPage();
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
const comboBox= page.locator("button[name='salutation']");
await comboBox.click();
await page.getByTitle('Mrs.').click(); 
//To Enter the Last Name
await page.getByPlaceholder('Last Name').fill("Marvel");
//To Enter the CompanyName 
await page.locator("[name='Company']").fill("XYZ Company");
//To Click Save and Verify Leads name created
await page.locator("button[name='SaveEdit']").click();
await page.waitForLoadState('domcontentloaded');
const toastmessage = await page.waitForSelector('.forceVisualMessageQueue');

if (toastmessage)
{
    console.log("\nLead creation is successful, Toast message is : " + await toastmessage.textContent());
}
else
{
    console.log("\nLead creation is unsuccessful");
}

//To end the tracing
await context.tracing.stop({path:`trace.zip`});
await browser.close();
    
})