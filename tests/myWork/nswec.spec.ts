import { test, chromium } from "@playwright/test";

test("To view NSW Electoral Commissions registers",async ({page}) => {
    await page.goto("https://elections.nsw.gov.au/");
    await page.waitForLoadState('domcontentloaded');
    //await page.getByRole('menuitem', {name: 'Funding and disclosure'}).click();
    /*await page.waitForLoadState('load');
    await page.locator('li[class ="action-tiles-tile"]').nth(2).click();
 */

    
})