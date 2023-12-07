
/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import { chromium, test } from "@playwright/test";

test ("LeafTaps : To edit Lead details",async () => {
    //To create a browser instance
    const browser = await chromium.launch();
    //To create a browser context
    const browserContext = await browser.newContext();
    //To create a browser page
    const page = await browserContext.newPage();
    //To launch the leaftaps page
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //To Enter the username
    await page.locator('#username').fill("Demosalesmanager");
    //To Enter the password
    await page.locator('#password').fill("crmsfa");
    //To Click Login
    await page.locator('.decorativeSubmit').click();
    //To Click CRM/SFA link
    await page.click("text=CRM/SFA");
    //To Click Leads link
    await page.getByRole('link',{name:'Leads'}).click();
    //To Click on Create Lead
    await page.getByRole('link',{name:'Create Lead'}).click();
    //To Enter company name
    await page.locator("#createLeadForm_companyName").fill("DEF Company");
    //To Enter first name
    await page.locator("#createLeadForm_firstName").fill('Johan');
    //To Enter last name
    await page.locator("#createLeadForm_lastName").fill('Samuel');
    //To Click on Create Lead button  
    await page.locator(".smallSubmit").click();
    //To Click Edit
    await page.getByRole('link', {name : 'Edit'}).click();
    //To get the company name before updating with new value
    const oldCompany = await page.locator("#updateLeadForm_companyName").inputValue();
    console.log("\nOld Company name : "+ oldCompany);
    //To Change the company name
    await page.locator("#updateLeadForm_companyName").clear();
    await page.locator("#updateLeadForm_companyName").fill("UVW Company");
    //To Click Update
    await page.locator("input[value='Update']").click();
    const newCompany = await page.locator("#viewLead_companyName_sp").innerText();
    console.log(`\nCompany name is successfully updated from ${oldCompany} to ${newCompany}`);
})