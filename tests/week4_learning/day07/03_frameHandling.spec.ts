import {test, chromium} from "@playwright/test";

/* 
test ("To Handle frames using Frame Object",async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml");
    //To locate frame
    const frame = page.frame({url: "https://leafground.com/default.xhtml"});
    
    //console.log(frame);
    
    await frame?.waitForSelector("button#Click"); //question mark here is handling the frame availability whether it is true or false

    await frame?.click("button#Click");

    await page.waitForTimeout(5000);

    //page.mainFrame();//This will tell the mainframe of the page
    
    //To get the frame count
    const framesCount = page.frames(); //This gives an array

    console.log(`\nNumnber of frames present inside the page is : ${framesCount.length}`);
   
    //To click the webelement in different frame using frame array
    await framesCount[4].click("button#Click");

    await page.waitForTimeout(5000);

    
})

*/

//Second approach using Frame Locators

test ("To Handle frames using frame locators",async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml");
    //To locate frame using framelocators
    //Locating the first frame
    const frameLocator = page.frameLocator('iframe').first();

    frameLocator.locator("#Click").click();

    const card = page.locator('.card').filter({hasText: " Click Me (Inside Nested frame)"});
    //const card = page.getByText(" Click Me (Inside Nested frame)"); //Not working
    const firstFrame = card.frameLocator('iframe');
    const nestedFrame = firstFrame.frameLocator('iframe');
    nestedFrame.locator("#Click").click();

    await page.waitForTimeout(6000);
})