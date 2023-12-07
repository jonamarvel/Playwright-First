import { chromium, expect, test } from "@playwright/test";

test("To create a new lead", async () => {
    // To create the browser instance
    const browser= await chromium.launch();
    // To create the browser context
    const browserContext=await browser.newContext();
    // To get a new page
    const page = await browserContext.newPage();

    //To load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //To fill user name
    await page.getByLabel('Username').fill('Demosalesmanager')

    //To fill password
    await page.locator('#password').fill('crmsfa');

    await page.locator('.decorativeSubmit').click();

    //await page.locator('text=CRM/SFA').click();
    await page.click("text=CRM/SFA");

    //To get th(e innertext
    console.log(await page.getByText("CRM/SFA").innerText());

    //To click leads
    //await page.locator('text=Leads').click();
    await page.click("text=Leads");
    //await page.getByRole('link', {name : 'leads'}).click()

    await page.click("text=Create Lead");

    //Enter the company name
    await page.fill("#createLeadForm_companyName", "ABC Company");
    //Enter first name
    await page.fill("#createLeadForm_firstName", "Jona");

    //Enter the surname
    await page.fill("#createLeadForm_lastName", "Marvel Nayagam");

    //await page.waitForTimeout(2000);

    //Click Submit
    await page.click("input[type='submit']");

    //Print the URL
    const url=page.url();
    console.log("The URL of the page is : "+ url);

    await page.waitForLoadState('load');
    
    //Print the title of the page
    const title = await page.title();
    //console.log("The Title of the page is : "+ title);

    console.log(`The Title of the page is : ${title}`);
    expect(title).toBe("View Lead | opentaps CRM");

  
    
})