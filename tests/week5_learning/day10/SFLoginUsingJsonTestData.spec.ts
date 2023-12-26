
import { test } from "@playwright/test";

import loginData from "../../testdata/SFLoginInfo.json";


test("Login into Salesforce using data from json file",async ({page}) => {

console.log(loginData);
//To login into Salesforce
await page.goto(loginData.url);
//To fill user name
await page.locator("#username").fill(loginData.username);
//To fill password
await page.locator("#password").fill(loginData.password);
//To click login
await page.locator("#Login").click();

await page.waitForTimeout(5000);

})