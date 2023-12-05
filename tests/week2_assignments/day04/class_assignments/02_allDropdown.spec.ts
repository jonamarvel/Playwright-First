/* 1. Use fixture to launch the browser
2. Load the URL http://leaftaps.com/opentaps/control/main
3. Enter the username
4. Enter the password
5. Click Login button
6. Click 'CRM/SFA' link.
7. Click Leads 
8. Click Create Leads
9. Enter all the madatory fields
10. Choose 'Direct Mail' from the Source dropdown using option
11. Choose 'Computer Software' from the Industry dropdown using value
12. Choose 'Partnership' from the Ownership dropdown using index */

import { chromium, test } from "@playwright/test";

test("To create a new lead", async () => {
    // To create the browser instance
    const browser= await chromium.launch();
    // To create the browser context
    const browserContext=await browser.newContext();
    // To get a new page
    const page = await browserContext.newPage();
    //To load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //To fill user name
    await page.getByLabel('Username').fill('Demosalesmanager')
    //To clear the presented text
    await page.getByLabel('Username').clear();
    await page.waitForTimeout(2000);
    //To fill again the user name
    await page.getByLabel('Username').fill('Demosalesmanager')
    //To fill password
    await page.locator('#password').fill('crmsfa');
    //To click login
    await page.locator('.decorativeSubmit').click();
    //To click CRM/SFA
    await page.click("text=CRM/SFA");
    //To click leads
    await page.getByRole('link', {name : 'leads'}).click()
    //To click Create Lead
    await page.click("text=Create Lead");
    //To fill all mandatory fields
    //Enter the company name
    await page.fill("#createLeadForm_companyName", "ABC Company");
    //Enter first name
    await page.fill("#createLeadForm_firstName", "Jona");
    //Enter the surname
    await page.fill("#createLeadForm_lastName", "Marvel Nayagam");
    //await page.waitForTimeout(2000);
    //Select dropdown option
    //Choose 'Direct Mail' from the Source dropdown using option -  by Label
    await page.selectOption("#createLeadForm_dataSourceId",{label : 'Direct Mail'});
    //Choose 'Computer Software' from the Industry dropdown using value - by Value
    await page.selectOption("#createLeadForm_industryEnumId",{value : 'IND_SOFTWARE'});
    //Choose 'Partnership' from the Ownership dropdown using index - by Index
    await page.selectOption("#createLeadForm_ownershipEnumId",{index : 2});
    //Click Submit
    await page.click("input[type='submit']");
    //Print the URL using +
    const url=page.url();
    console.log("\nThe URL of the page is : "+ url);
    await page.waitForLoadState('load'); 
    //Print the title of the page using backtick
    const title = await page.title();
    console.log(`\nThe Title of the page is : ${title}`);
    
})