import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
    //use is a mandatory function when extending or customizing the function
    page:async ({page}, use) => {

        await page.goto("https://login.salesforce.com/");
        await page.setViewportSize({width: 800, height: 600});
        await page.locator("#username").fill('jonamarvel@testleaf.com');
        await page.locator("#password").fill('Testleaf123');
        await page.click('#Login');

        await use(page);


    }

})