import { test } from "@playwright/test";

test("To launch a browser", async({page}) => {

await page.goto("https://login.salesforce.com/");
//await retryPage.waitForTimeout(5000);
await page.locator("#username").fill('jonamarvel@testleaf.com')
await page.locator("#password").fill('Testleaf123');
await page.locator('#Login').click();
await page.waitForLoadState('load');
const title = await page.title();
console.log(`\n Page Title is : ${title}`);
const url = page.url();
console.log(`\n URL of the loaded page is : ${url}`);


})

