import { test, chromium } from "@playwright/test";

test("To Merge Contacts in LeafTaps application using sequential promise and alert handlers", async ({ page, context }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    //To fill user name
    await page.locator("#username").fill("Demosalesmanager");
    //To fill password
    await page.locator("#password").fill("crmsfa");
    //To click on Login button
    await page.locator(".decorativeSubmit").click();
    //To wait for page to load
    await page.waitForEvent('load');
    //To click on CRM/SFA
    await page.getByText("CRM/SFA").click();
    //To wait for page to load
    await page.waitForEvent('load');
    //To click on Contacts
    await page.getByText("Contacts", { exact: true }).click();
    //To wait for sometime
    await page.waitForTimeout(3000);
    //To click on Merge Contacts using Xpath locator
    await page.locator("//a[text()='Merge Contacts']").click();
    //To wait for sometime
    await page.waitForTimeout(3000);
    //To Click on Widget of From Contact
    //Create promise to handle newly opened window before clicking in widget of From Contact


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        //To click on widget of 'From Contact'
        page.locator('img[alt="Lookup"]').first().click(),
        //To click on widget of 'To Contact'
        page.locator('img[alt="Lookup"]').last().click(),
    ])
    const pages = newPage.context().pages();
    console.log(`Number of pages : ${pages.length}`);

    pages.forEach(tabs => {
        console.log(tabs.url());
        
    })
    
    for (let index = 0; index < pages.length; index++) {
        await pages[index].waitForLoadState('load');
        const title = await pages[index].title();
        console.log(`Page title is : ${title}`);

        if (title === 'Find Contacts') {
            const webPage = pages[index];      
            await webPage.locator('a[class="linktext"]').first().click();   
            await webPage.locator('a[class="linktext"]').nth(4).click(); 
        }
        
    }
    await page.waitForTimeout(5000); 

    /* pages[0].bringToFront;
    await page.waitForTimeout(5000);
    
    const fromContactPromise = context.waitForEvent('page');
    //To click on widget of 'From Contact' now
    await page.locator('img[alt="Lookup"]').first().click(); 
    //To resolve promise
    const fromContact = await fromContactPromise;
    //To Click on First Resulting Contact
    await newPage.locator('a[class="linktext"]').first().click();
    //To wait for some time
    await page.waitForTimeout(3000);
    //To Click on Widget of To Contact
    //Create promise to handle newly opened window before clicking in widget of To Contact
    const toContactPromise = context.waitForEvent('page');
    //To click on widget of 'To Contact' now
    await page.locator('img[alt="Lookup"]').last().click();
    //To resolve promise
    const toContact = await toContactPromise; 
    //To Click on Second Resulting Contact
    await toContact.locator('a[class="linktext"]').nth(4).click(); 
    //To wait for sometime
    await page.waitForTimeout(3000);
    //To create event listener of alert box before clicking on Merge button
    page.once('dialog', async dialog => {
        //To print the message of alert
        const dialogMessage = dialog.message();
        console.log(`\nDialog alert is asking for the question : ${dialogMessage}`);
        //To print the type of alert
        const dialogType = dialog.type();
        console.log(`\nType of Dialog alert is : ${dialogType}`);
        await page.waitForTimeout(3000);
        //To accept the dialog
        await dialog.accept();
        })
    //To Click on Merge button using Xpath Locator
    await page.locator("//a[text()='Merge']").click();
    //To wait for sometime
    await page.waitForEvent('load');
    await page.waitForTimeout(3000);
    //To Verify the title of the page
    const title = await page.title();
    console.log(`\nPage Title is : ${title}`); */
    await page.waitForTimeout(5000);
})
