import { test, chromium, expect } from "@playwright/test";

test("To check the visibility of the button",async ({page}) => {

    await page.goto("https://leafground.com/waits.xhtml");
    //Locator Chaining concept using Filter
    const cardToSelect = page.locator(".card").filter({hasText: "Wait for Visibility"}); //Filter method to narrow down the searches
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText: "Click"});
    const buttonHidden = cardToSelect.getByRole("button").filter({hasText: "I am here"});
    await buttonToClick.click();
    //waiting for button to be visible after 10 secs
    await expect(buttonHidden).toBeVisible({timeout: 10000});

})