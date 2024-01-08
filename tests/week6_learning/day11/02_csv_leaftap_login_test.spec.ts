import { test, chromium } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import { parse } from "csv-parse/sync";

const records = parse(fs.readFileSync(path.join(__dirname, "LeafTapsloginData.csv")),
{
    columns : true, // This will treat the first row in the csv file as column names
    skip_empty_lines : true,
});

for (const record of records)
{
test("To login into ", async ({ page, context }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    //To fill user name
    await page.locator("#username").fill("Demosalesmanager");
    //To fill password
    await page.locator("#password").fill("crmsfa");
    //To click on Login button
    await page.locator(".decorativeSubmit").click();
    //To wait for page to load
    await page.waitForEvent('load');

})
}