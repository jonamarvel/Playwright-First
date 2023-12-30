import { chromium, test } from "@playwright/test";

// To use the storage state for user credentials
test.use({storageState: "creds/sf-login-storage.json"})

test("TC0001 : Salesforce : Autologin using Storage State - To create a new lead", async ({page}) => {

    page.goto("https://testleaf-c-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
    await page.locator(".slds-icon-waffle").click();
    await page.waitForLoadState('domcontentloaded');
    //To  Click View All and click Individuals from App Launcher
    await page.getByLabel('View All Applications').click();
    //To Click on Individuals 
    await page.waitForLoadState('domcontentloaded');
    await page.locator('.al-tab-item').nth(60).click();
    //To Click on the Dropdown icon in the Individuals tab
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//div[contains(@class,'slds-p-right--x-small')]").last().click();
    //To Click on New Individual
    await page.getByText('New Individual').click();
    //To enter First Name
    await page.getByPlaceholder('First Name').fill("Jona");
    //To enter Last Name
    await page.getByPlaceholder('Last Name').fill("Marvel");
    // To Click save and verify Individuals Name
    await page.getByTitle('Save').last().click();
    const verifyIndividual = await page.locator("div[class*=slds-page-header__title] span[class=uiOutputText]").innerText();//Jona Marvel

    console.log(`\nIndividual Name : ${verifyIndividual}`);

    if (verifyIndividual == 'Jona Marvel'){
        console.log(`\nIndividual "${verifyIndividual}" has been created successfully `);
    }
    else{ 
        console.log(`\nIndividual "${verifyIndividual}" is not matched with Jona Marvel`);
    }
    
})