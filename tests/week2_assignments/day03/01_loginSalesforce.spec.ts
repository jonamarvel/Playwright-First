/*
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url
*/

import {chromium, test, webkit} from "@playwright/test";

test ("To login into Salesforce",async () => {

    // To launch browser
    const browser = await chromium.launch({headless : false, channel : 'chromium'});

    //To launch new browser context
    const browserContext = await browser.newContext();

    //To launch new page
    const page = await browserContext.newPage();

    //To go to salesforce page
    await page.goto("https://login.salesforce.com");

    //To wait for page to launch
    await page.waitForTimeout(1000);

    //To fill user name and password
    await page.locator("#username").fill('jonamarvel@testleaf.com');

    await page.locator("#password").fill('Testleaf123');

    //To login into Salesforce
    await page.locator("#Login").click();

    //To load page to be loaded completly then we can interact with Web elements
    await page.waitForLoadState('load');
    //To print the page title
    const title = await page.title()
        console.log("Page Title is : "+title);
    
    //To print the url
    const url = page.url();
    console.log("Page url is : "+url);   
})