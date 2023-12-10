import { test, chromium, expect } from "@playwright/test";

test("Create a New Lead in Leafground",async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    await expect(typeName).toBeEnabled();
    await typeName.fill("Jona");
    await expect(page.getByPlaceholder("Disabled")).toBeEnabled(); //hard assert
    //await expect.soft(page.getByPlaceholder("Disabled")).toBeEnabled(); //soft assert
    console.log("The test case is not terminated");
    await expect(page).toHaveURL("https://leafground.com/"); //positive matches
    await expect(page).not.toHaveURL("error"); //negative matches
    
})