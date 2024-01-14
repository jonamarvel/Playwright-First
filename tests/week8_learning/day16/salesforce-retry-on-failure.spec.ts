import { test } from "./retry-logic";

test("Salesforce : To launch a browser", async({page}) => {

await page.goto("https://login.salesforce.com/");

//await page.locator("#username").fill('jonamarvel@testleaf.com');
await page.delayedFill("#username", 'jonamarvel@testleaf.com');

//await page.locator("#password").fill('Testleaf123');
await page.delayedFill("#passwordwrong", 'Testleaf123');

await page.clickAndDelay('#Login');

const title = await page.title();
console.log(`\n Page Title is : ${title}`);
const url = page.url();
//console.log(`\n URL of the loaded page is : ${url}`);


})

