import { test,chromium } from "@playwright/test";

//Try with https://the-internet.herokuapp.com/basic_auth
//Try with https://issuetracker.google.com/issues/37091034?pli=1

test ("To Handle alerts",async ({page}) => {
    await page.goto("https://leafground.com/alert.xhtml");
    await page.waitForTimeout(5000);
    //To create event listener
    page.once('dialog',async dialog => {
        const message = dialog.message();
        console.log(`\nMessage from Alert : ${message}`);
        const messageType = dialog.type();
        console.log(`\nType of Alert Message : ${messageType}`);
        await dialog.accept(); //We can accept the dialog
        //await dialog.dismiss(); //We can dismiss the dialog

    })

    //To click on Show button in simple Alert(Simple Dialog)
    await page.locator("text=Show").first().click();

    page.once('dialog',async dialog => {
        const message = dialog.message();
        console.log(`\nMessage from Alert : ${message}`);
        const messageType = dialog.type();
        console.log(`\nType of Alert Message : ${messageType}`);
        //await dialog.accept(); //We can accept the dialog
        await dialog.dismiss(); //We can dismiss the dialog
    })

    //To click on Show button present in Alert (Confirm Dialog)
    const cardlocator = page.locator(".card").filter({hasText: "Alert (Confirm Dialog)"});
    const alertButton = cardlocator.locator("button").filter({hasText: "Show"});
    await alertButton.click();
    //To wait for sometime
    await page.waitForTimeout(2000);


    page.once('dialog',async dialog => {
        const message = dialog.message();
        console.log(`\nMessage from Alert : ${message}`);
        const messageType = dialog.type();
        console.log(`\nType of Alert Message : ${messageType}`);
        await dialog.accept("Jona Marvel"); //We can accept the dialog
        //await dialog.dismiss(); //We can dismiss the dialog

    })

    //To click on Show button present in Alert (Prompt Dialog)
    const cardlocator1 = page.locator(".card").filter({hasText: "Alert (Prompt Dialog)"});
    const alertButton1 = cardlocator1.locator("button").filter({hasText: "Show"});
    await alertButton1.click();
    //To wait for sometime
    await page.waitForTimeout(5000);
    //To click on Show button present in Minimize and Maximize
    await page.locator("text=Show").last().click();
    await page.waitForTimeout(5000);

})