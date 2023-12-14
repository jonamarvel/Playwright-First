
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

   //To goto Search app textbox and enter Marketing and press enter
   await page.getByPlaceholder('Search apps or items...').fill('Marketing');
   page.keyboard.press("Enter");

   await page.waitForTimeout(1000);
   //To click on Marketing Tile 
   //await page.locator(".slds-app-launcher__tile-body slds-truncate").click();
   await page.locator('div[data-name="Marketing"]').click();

   //To click on Leads Tab
   await page.locator('a[title="Leads"]').click();

   //To click on New button
   await page.locator('div[title="New"]').click();

   //To fill Salutation, First Name, Last Name and Company Name
   await page.locator('button[aria-label="Salutation, --None--"]').click();

   //await page.locator('button[data-value="Mrs."]').click();
   //await page.locator('div[class^="slds-combobox__form-element"] button[data-value="Mrs."]').click();
   await page.getByText("Mrs.").click();

   await page.getByPlaceholder("First Name").fill("Jona");

   await page.getByPlaceholder("Last Name").fill("Marvel");

   await page.locator('input[name="Company"]').fill("ABC Company");

   //To click on Save
   await page.locator('button[name="SaveEdit"]').click();

   const toastMessage = await page.locator('div[id*="toastDescription"]').innerText();
   console.log(`Lead creation is successful => ${toastMessage}`);
   expect(toastMessage).toContain('Jona Marvel');

   //To click on Actions dropdown
 /*   const actionDD = page.getByText("Show more actions");
   expect(actionDD).toBeVisible;
   await actionDD.click(); */
   await page.locator('li[class^="slds-dropdown-trigger"]').last().click();

   //To click on Convert action
   await page.getByText("Convert", {exact: true}).click();

   //To click on Opportunity section
   await page.getByTitle("ABC Company-").click();

   const oppSection = page.locator('div[class ="createPanelExpanded"]');

   await oppSection.locator('input[class =" input"]').fill("JonaConvLead");

 
   //To click on Convert button
   await page.locator('button[class ="slds-button slds-button_brand"]').click();

   //To check the text that lead has been converted 
   const leadConverted = await page.getByText("Your lead has been converted").innerText();

   expect(leadConverted).toContain("Your lead has been converted");

   console.log(`Lead conversion is successfull : ${leadConverted}`);

   //To click on Go to Leads button
   //await page.locator('button[class ="slds-button slds-button_brand"]').click();
   await page.getByRole('button', { name: "Go to Leads" }).click();

   //To fill Search this list seach box
   await page.locator('input[name="Lead-search-input"]').fill("JonaConvlead");
   page.keyboard.press("Enter");

   //To confirm the No items to display message
   const noItems = await page.getByText("No items to display.").innerText();

   expect(noItems).toContain("No items to display.");

   //To click on Opportunities Tab
   await page.locator('a[title="Opportunities"]').click();

   //To go to Search this list searchbox
   await page.getByPlaceholder('Search this list...').fill("JonaConvlead");
   page.keyboard.press("Enter");

   //To click on Opportunity hyper link
   await page.locator('a[data-refid="recordId"]').first().click();
   //await page.locator('span[class$="forceInlineEditCell"]').first().click();
   //await page.locator('span[class$="forceInlineEditCell"] a[title="JonaConvLead"]').click();

   //To check the Opportunity Name
   //const oppName = await page.locator('slot[name="primaryField"]').last().innerText();
   const oppName = await page.locator('lightning-formatted-text[slot="primaryField"]').innerText();

   expect(oppName).toContain("JonaConvLead");






})