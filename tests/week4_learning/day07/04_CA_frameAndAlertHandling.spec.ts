import {test, chromium} from "@playwright/test";

test ("To Handle frames and Alerts in w3Schools website",async ({page}) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    //To locate frame using framelocators

    const frame = page.frameLocator('#iframeResult');
    await page.waitForTimeout(5000);

    //To click on Try it button inside frame with event listener of Alert

       //To create event listener - Event Specific
        page.once('dialog',async dialog => {
        const message = dialog.message();
        console.log(`\nMessage from Alert : ${message}`);
        const messageType = dialog.type();
        console.log(`\nType of Alert Message : ${messageType}`);
        await page.waitForTimeout(5000);
        await dialog.accept();

    })
    await frame.getByText("Try it").click();

    //To get a confirmation message after clicking Try it button
    const confirmedMessage = await frame.locator("#demo").innerText();
    console.log(`Confirmed message after clicking 'Try it' button is : ${confirmedMessage}`);

})
