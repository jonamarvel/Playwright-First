/**
 * Test Steps:
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Accounts tab 
5. Click on New button
6. Enter 'your name' as account name
7. Select Ownership as Public                                       
8. Click save and verify Account name 
 * 
 * 
 * 
 */

import { test, chromium, expect } from "@playwright/test";

/* 
test.beforeAll(async () => {
    const prompt = require('prompt-sync')();
    let accountName = await prompt("Please enter account name : ");
    console.log("Account Name is : " + accountName);
    
})
 */

test("Salesforce : To create a new account and assign ownership", async ({ page }) => {
        console.log("Browser is launching!!!")
        //To login into Salesforce
        await page.goto("https://login.salesforce.com/");
        await page.waitForTimeout(1000);
        await page.locator('#username').fill("jonamarvel@testleaf.com");
        await page.locator('#password').fill("Testleaf123");
        await page.locator('#Login').click();
        //To click on toogle menu
        await page.waitForLoadState('load');
        await page.locator('.slds-icon-waffle').click();
        //To Click view All and click Sales from App Launcher
        await page.getByRole('button', { name: 'View All' }).click();
        await page.locator('div[data-name="Sales"]').click();
        //To Click on Accounts tab 
        await page.locator('a[title="Accounts"]').click();
        //To Click on New button
        await page.getByTitle('New').nth(0).click();
        //To Enter 'your name' as account name
        await page.locator('[name="Name"]').fill("Jona Marvel");
        //To Select Ownership as Public
        await page.locator('button[aria-label="Ownership, --None--"]').click();
        await page.waitForLoadState('domcontentloaded');
        await page.locator('span[title="Public"]').click();
        //Click save and verify Account name 
        await page.locator('button[name="SaveEdit"]').click();
        const toastMessage = await page.locator('div[aria-label="Success"]').innerText();
        const accountName = await page.locator('span[class="toastMessage slds-text-heading--small forceActionsText"] a[class="forceActionLink"]').innerText();
        console.log(toastMessage);
        console.log(`\nYour account name is : ${accountName}`);
        console.log(expect(accountName).toBe('Jona Marvel'));
        //console.log(expect(accountName).toBe('Jona Marvel Nayagam'));
})