/* 
Homework: Window
    Login to "https://login.salesforce.com/";
    Enter Username, Password and click Login
    ClicK 'Learn More' button under Mobile Publisher 
    Click 'Confirm' on the new window
    Verify and validate the title, url of the page
 */

import {test} from "@playwright/test";

test ("To handle multiple windows using Promise All",async ({page, context}) => {

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
    console.log("Main Page Title is : "+title);
    //To print the url
    const url = page.url();
    console.log("Main Page url is : "+url);  
    await page.waitForTimeout(2000);
    //To click on Learn more button from Mobile Publisher
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('button[title="Learn More"]').click(),

    ])
    //To click on Confirm button
    await newPage.locator('button[onclick="goAhead()"]').click();
    await newPage.waitForLoadState('load');

    const newPageURL = newPage.url();
    console.log(`\nNew Page URL is : ${newPageURL}`);
    const titleNew = await newPage.title();
    console.log(`\nNew Page Title is : ${titleNew}`);

})



test.only ("To handle multiple windows using Promise", async ({page, context}) => {
    
    console.log("Window Handiling using sequential promise statement");
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
    console.log("Main Page Title is : "+title);
    //To print the url
    const url = page.url();
    console.log("Main Page url is : "+url);  
    //To create a promise to resolve before clicking Learn More button
    await page.waitForTimeout(2000);
    const windowPromise = context.waitForEvent("page");
    //To click button 'Learn More' from Mobile Publisher section
    await page.locator('button[title="Learn More"]').click();
    //To resolve promise that we got 
    const window = await windowPromise;
    //To click on Confirm button
    await window.locator('button[onclick="goAhead()"]').click();
    //To get a URL of the new page
    const newPageURL = window.url();
    console.log("\nNew Page URL is : "+newPageURL);
    await window.waitForLoadState('load');
    //To get a title of the new page
    const titleNew = await window.title();
    console.log("\nNew Page Title is : "+titleNew);

})
