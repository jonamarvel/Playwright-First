/*  Assignment - 2 (Create a new Lead)

    1) Open http://leaftaps.com/opentaps/control/main
    2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 
    
Username: Demosalesmanager
Password: crmsfa
*/

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
    await page.locator('#username').fill('Demosalesmanager')

    //To fill password
    await page.locator('#password').fill('crmsfa');

    //To click login
    await page.locator('.decorativeSubmit').click();

    //await page.locator('text=CRM/SFA').click();
    await page.click("text=CRM/SFA");

    //To click on Leads Tab
    //await page.locator('text=Leads').click();
    await page.click("text=Leads");

    //To click on Create Lead shortcuts
    await page.click("text=Create Lead");

    //Enter the company name
    await page.fill("#createLeadForm_companyName", "ABC Name")

    //Enter first name
    await page.fill("#createLeadForm_firstName", "Jona");

    //Enter the surname
    await page.fill("#createLeadForm_lastName", "Marvel Nayagam");
    
    //Click Submit
    await page.click("input[type=submit]");

    //Print the URL
    const url=page.url();
    console.log("\nThe URL of the page is : "+ url);

    await page.waitForLoadState('load'); //This is to wait for the page to be loaded completly to get a title in next line
    
    //Print the title of the page
    const title = await page.title();
    console.log(`\nThe Title of the page is : ${title}`);
    
})