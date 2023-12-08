/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/

import { chromium, expect, test } from "@playwright/test";
import { link } from "fs";
import { title } from "process";

test("Salesforce : To Create Individuals",async () => {

    //To create browser instance
    const browser = await chromium.launch();
    //To create browser context
    const browserContext = await browser.newContext();
    //To create browser page
    const page = await browserContext.newPage();
    //To Login to https://login.salesforce.com
    page.goto("https://login.salesforce.com");
    //To enter the username
    await page.locator("#username").fill('jonamarvel@testleaf.com');
    //To enter the password
    await page.locator("#password").fill('Testleaf123');
    //To login into Salesforce
    await page.locator("#Login").click();
    //To Click on the toggle menu button from the left corner
    await page.waitForLoadState('domcontentloaded');
    await page.locator(".slds-icon-waffle").click();
    await page.waitForLoadState('domcontentloaded');
    //To  Click View All and click Individuals from App Launcher
    await page.getByLabel('View All Applications').click();
    //To Click on Individuals 
    await page.waitForLoadState('domcontentloaded');
    await page.locator('.al-tab-item').nth(60).click();
    //To Click on the Dropdown icon in the Individuals tab
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//div[contains(@class,'slds-p-right--x-small')]").last().click();
    //await page.waitForSelector("div[class*=x-small] span[part=boundary] svg[data-key=chevrondown]")
    //await page.locator("div[class*=x-small] span[part=boundary] svg[data-key=chevrondown]").click();
        //other selectors that I tried for same dropdown icon but nothing works
        //await page.locator(".slds-dropdown-trigger slds-dropdown-trigger--click").nth(21).click();
        //await page.locator(".slds-button slds-button_reset").nth(7).locator('svg[data-key="chevrondown"]').click();
        //await page.locator(".slds-button slds-button_reset").nth(14).locator('svg[data-key="chevrondown"]').click();
        //await page.locator(".slds-button slds-button_reset").nth(5).click();
        //await page.locator(".slds-icon-utility-chevrondown slds-icon_container").nth(14).locator('svg[data-key="chevrondown"]').click()
        //await page.locator(".slds-dropdown slds-dropdown--center slds-nubbin--top").click();
        //await page.locator(".slds-icon slds-icon-text-default slds-icon_xx-small").nth(2).click();
        // await page.getByRole('link',{name: 'Recently Viewed | Individuals List'}).click();

    //To Click on New Individual
    await page.getByText('New Individual').click();

    //To enter Salutation // I tried the below but It didn't work
    /* await page.locator('div[title class = "select"]').click();
    await page.getByTitle('Mrs').click(); */

    //To enter First Name
    await page.getByPlaceholder('First Name').fill("Jona");
    //To enter Last Name
    await page.getByPlaceholder('Last Name').fill("Marvel");
    // To Click save and verify Individuals Name
    await page.getByTitle('Save').last().click();
    //await page.getByTitle('Save', {exact: true}).click(); //Working
    //await page.locator("button[title='Save']").click(); //Working
    //await page.locator("//span[text()='Save']").nth(1).click(); //Working
    //await page.getByTitle('Save').click(); // Not Working, I tried with this to locate Save button but it is not working

    //const verifyIndividual = await page.locator(".uiOutputText").nth(10).innerText();//JMarv (when I tried with this class aloe then it is returning only 'JMarv' but when I try with the next line code it is returning 'Jona Marvel')
    const verifyIndividual = await page.locator("div[class*=slds-page-header__title] span[class=uiOutputText]").innerText();//Jona Marvel

    console.log(`\nIndividual Name : ${verifyIndividual}`);

    if (verifyIndividual == 'Jona Marvel'){
        console.log(`\nIndividual "${verifyIndividual}" has been created successfully `);
    }
    else{ 
        console.log(`\nIndividual "${verifyIndividual}" is not matched with Jona Marvel`);
    }
    /* 
    Using assertion to compare string value // Not sure how to do this with below code

    console.log(expect(verifyIndividual).toContain('Jona Marvel'));
    if (expect(verifyIndividual).toContain('Marvel')) {
        console.log(`Individual has been created successfully ${verifyIndividual}`);
    } else {
        
    } */
    

})