import { test, chromium, expect } from "@playwright/test";

test("To check the invisibility of the button",async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
    //Locator Chaining concept using Filter
    const cardToSelect = page.locator(".card").filter({hasText: "Wait for Invisibility"}); //Filter method to narrow down the searches
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText: "Click"});
    const buttonVisible = cardToSelect.getByRole("button").filter({hasText: "I am about to hide"});
    await buttonToClick.click();
    //waiting for button to be invisible after 10 secs
    //await expect(buttonVisible).toBeHidden({timeout: 10000}); //This will pass since we have given timout as 10 secs (ie.,that is needed time) 
    await expect(buttonVisible).toBeHidden(); //This will fail since the default expect timeout is 5 secs
     

})