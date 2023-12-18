
import { test, chromium, expect } from "@playwright/test";

//include both page and context fixtures
test("To handle windows",async ({page,context}) => {

    await page.goto("https://leafground.com/window.xhtml");

    //To create a promise (like a event listener - just informing that there will be a event going to be triggered so don't resolve until the button is clicked)
    const windowPromise = context.waitForEvent("page");

    //To click button Open
    await page.getByText("Open", {exact: true}).click();

    //To resole promise that we got in line number 10
    const window = await windowPromise;

    await page.waitForTimeout(5000);

    await expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    
    await page.waitForTimeout(2000);
    //To fill email in the opened window
    await window.fill("#email", "jonah.tsm@gmail.com");
    await page.waitForTimeout(2000);
    
    //To close window which we opened in step 13
    await window.close();
    await page.waitForTimeout(2000);

    //To click on Home page in the first window
    await page.click('i[class="pi pi-home"]')
    await page.waitForTimeout(2000);
    
})