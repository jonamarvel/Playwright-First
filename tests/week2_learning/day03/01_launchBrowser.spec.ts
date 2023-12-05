import { chromium, test, webkit } from "@playwright/test";

test("To launch a browser", async() => {
    //test.setTimeout(120000)
//Playwright code
// To launch the browser -->creates a new browser instance
//const browser = await webkit.launch();
const browser = await chromium.launch({headless: false, channel: 'chrome'});
//const browser = await firefox.launch({headless: false});
//get the new browser context
const browserContext = await browser.newContext();
//const browserContext1 = await browser.newContext();
// Get a new page
const page = await browserContext.newPage();
//const page2 = await browserContext1.newPage();
// Load URL
await page.goto("https://login.salesforce.com/");
await page.waitForTimeout(5000);
//To locate Web element
//one way
await page.locator("#username").fill('jonamarvel@testleaf.com')
//await page.fill("#username", "jonamarvel@testleaf.com")
//await page.locator(".inputLogin").nth(1).fill('XXXXX');

await page.locator("#password").fill('Testlead123')

//To login
await page.locator('#Login').click();

await page.waitForLoadState('load');

//To print the title
const title = await page.title();
console.log(`\n Page Title is : ${title}`);

//To print the URL
const url = page.url();
console.log(`\n URL of the loaded page is : ${url}`);


})

