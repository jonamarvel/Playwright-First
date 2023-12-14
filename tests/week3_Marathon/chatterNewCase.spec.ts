import { chromium, expect, test } from "@playwright/test";

test("Salesforce : To create a Lead and convert into Opportunity",async ({page}) => {

   //To go to salesforce page
   await page.goto("https://login.salesforce.com");

   //To wait for page to launch
   await page.waitForTimeout(1000);

   //To fill user name and password
   await page.locator("#username").fill('jonamarvel@testleaf.com');

   await page.locator("#password").fill('Testleaf123');

   //To login into Salesforce
   await page.locator("#Login").click();

   //To click App Launcher icon
   await page.locator('.slds-icon-waffle').click();
   await page.waitForTimeout(1000);

   //To click View All 
   await page.waitForSelector('[aria-label="View All Applications"]');

   await page.locator('[aria-label="View All Applications"]').click();

     //To goto Search app textbox and enter Service and press enter
     await page.getByPlaceholder('Search apps or items...').fill('Service');
     page.keyboard.press("Enter");
  
     await page.waitForTimeout(1000);

     //To click on Service Tile
     await page.locator('div[data-name="Service"]').click();

     //To click Cases Tab
     await page.getByTitle("Cases").click();
     


})