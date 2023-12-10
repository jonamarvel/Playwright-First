//toHaveText
import { test, chromium, expect} from "@playwright/test";
import { TIMEOUT } from "dns";
import { setTimeout } from "timers";
test("To check the change of text inside button",async ({page}) => {
    
    page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator('.card').filter({hasText: 'Wait for Text Change'});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText: 'Click'});
    await buttonToClick.click();
    //const buttonTextChanged = cardToSelect.getByRole("button").filter({hasText: 'I am going to change!'});
    //waiting for button to be changed with different text after 10 secs
    await page.waitForTimeout(10000);
    const buttonTextChanged = cardToSelect.getByRole("button").filter({hasText: 'Did you notice?'});
    await expect(buttonTextChanged).toHaveText('Did you notice?'); 
})