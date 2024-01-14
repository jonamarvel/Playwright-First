import { expect, test } from "@playwright/test";


test("Visual Testing with Playwright",async ({page}) => {
    
    await page.goto("https://www.amazon.com.au/");
    const ss = await page.screenshot();
    expect(ss).toMatchSnapshot('amazon.png');


})