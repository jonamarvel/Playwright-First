import { chromium, devices, test } from "@playwright/test";

test("To run against different devices",async () => {


    const myDevices = devices['iPad Mini'];
    const browser = await chromium.launch();
    const context = await browser.newContext({
        ...myDevices
    })
    const page = await context.newPage();
    await page.goto("https://testleaf.com");
    console.log(`Testleaf site is launched successfully in ${myDevices}`);
    

})
