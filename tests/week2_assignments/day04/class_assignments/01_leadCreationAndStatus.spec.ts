
/* 
1. Launch the browser
2. Load the URL "http://leaftaps.com/opentaps/control/main";
3. Enter the username using getByLabel
4. Enter the password using attribute
5. Click the login button using class name
6. Get the text of CRM/SFA and click the CRM/SFA using getByText
7. Print the page title and the url
8. Click Leads
9. Click Create Lead using text 
10. Fill all the mandatory fields
11. Click Submit button using class name
12. Print the status of the lead 
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
    await page.getByLabel('Username').fill('Demosalesmanager')

    await page.waitForTimeout(2000);

    //To fill password using attribute
    await page.locator('[name=PASSWORD]').fill('crmsfa');

    //Click the login button using class name
    await page.locator('.decorativeSubmit').click();

    //Get the text of CRM/SFA and click the CRM/SFA using getByText
    const crmsfa = await page.getByText("CRM/SFA");
    console.log("CRM/SFA " + await crmsfa.innerText());
    await crmsfa.click();

    //await page.getByText("CRM/SFA").click();
    //await page.getByText("CRM/SFA").click();

    //Print the URL
    const url=page.url();
    console.log("The URL of the page is : "+ url);

    await page.waitForLoadState('load');
    
    //Print the title of the page
    const title = await page.title();

    console.log(`The Title of the page is : ${title}`);
    
    // Click Leads
    await page.click("text=Leads");

    //Click Create Lead using text 
    await page.click("text=Create Lead");

    //Fill all the mandatory fields
    //Enter the company name
    await page.fill("#createLeadForm_companyName", "ABC Company");

    //Enter first name
    await page.fill("#createLeadForm_firstName", "Jona");

    //Enter the surname
    await page.fill("#createLeadForm_lastName", "Marvel Nayagam");
    
    // Click Submit button using class name
    await page.click(".smallSubmit");

    // Print the status of the lead
    const status=await page.locator("#viewLead_statusId_sp").innerText();
    console.log("\nLead is successfully created and Status of the lead is : "+ status)

})