import { test } from "@playwright/test";

test("Print all console messages",async ({page}) => {
    
    page.on('console', message => {
        console.log(`Messages >> ${message.type()} and ${message.text()}`)
    })
    await page.goto("https://www.amazon.in/uk");
    await page.waitForTimeout(20000);
})