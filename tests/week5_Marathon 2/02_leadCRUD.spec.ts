import { test, chromium, expect, request } from "@playwright/test";
import loginData from "../testdata/SFLoginInfo.json";
import { getAccessToken } from "../week5_learning/day10/authHelper.spec";


let accessToken : string;
let instanceURL : string;
let leadId : string;
let Salutation: string = "Mrs."
let FirstName: string = "Jona";
let LastName: string = "Rajan";


test ("Salesforce : To create a new lead using API Post Method",async ({request}) => {
    const authData = await getAccessToken();
    accessToken = authData.accessToken;
    instanceURL = authData.instanceURL;

    const createLead = await request.post(`${instanceURL}/services/data/v59.0/sobjects/Lead/`,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Connection": "keep-alive",
            "Content-Type": "application/json"
        },
        data:{
            "Salutation": Salutation,
            "LastName": LastName,
            "Company": "ABC"
        }
    })
    console.log("\n---------------------Create a new lead-------------------------\n");
    const createLeadJson = await createLead.json();
    console.log(createLeadJson);
    const statuscode = createLead.status();
    console.log(`\nStatus code after creating a new lead is : ${statuscode}`);
    expect(statuscode).toBe(201);
    leadId = createLeadJson.id
    console.log(`\nNewly created Lead id is : ${leadId}`);
    
})

test ("To update the lead using API Patch Method",async ({request}) => {
    console.log("\n---------------------Update a created lead------------------------\n");
    const updateLead = await request.patch(`${instanceURL}/services/data/v59.0/sobjects/Lead/${leadId}`,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Connection": "keep-alive",
            "Content-Type": "application/json"
        },
        data:{
            "FirstName": FirstName,
            "Title": "Updated Title",
        }
    })
    const statuscode = updateLead.status();
    console.log(`\nStatus code after updating First Name and Title of a new lead is : ${statuscode}\n`);
    expect(statuscode).toBe(204);
    
})

test("Salesforce : To delete a updated lead using Playwright",async ({page}) => {
    console.log("\n---------------------To delete a updated lead---------------------\n");
    //To login into Salesforce usig login information from json file in the folder
    await page.goto(loginData.url);
    await page.locator("#username").fill(loginData.username);
    await page.locator("#password").fill(loginData.password);
    await page.locator("#Login").click();
    await page.waitForEvent("load");
    //To click on App launcher icon using try catch block
    const applauncherIcon = page.locator(".slds-icon-waffle");
    try {
        await expect(applauncherIcon).toBeVisible();
        await applauncherIcon.click();
        await page.locator(".slds-icon-waffle").click();
        await page.waitForTimeout(3000);
    } catch (error) {
        //To prin the error if the page is not loaded yet
        console.log("The page is not loaded yet\n");
        console.log(error);
        await page.reload();
        await expect(applauncherIcon).toBeVisible();
        await applauncherIcon.click();
    }
    //To click on View All
    await page.locator('button[aria-label="View All Applications"]').click();
    //To type "Leads" in search box and click Dashboards link
    await page.getByPlaceholder("Search apps or items...").fill("Leads");
    await page.locator('a[data-label="Leads"]').click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Search this list...").fill(LastName);
    await page.keyboard.press("Enter");
    await page.locator('a[class*= "forceOutputLookup"]').first().click();
    await page.waitForTimeout(3000);
    const leadName = await page.locator('lightning-formatted-name[slot="primaryField"]').innerText();
    expect(leadName).toBe(`${Salutation} ${FirstName} ${LastName}`);
    console.log(`\nLead Full Name is : ${leadName}`);
    console.log("\nLead Name is verified\n");
    await page.locator('button[class="slds-button slds-button_icon-border-filled"]').click();
    await page.getByRole('menuitem', {name : "Delete"}).click();
    await page.locator('button[title="Delete"]').click();

    await page.waitForTimeout(4000);
    const toastMessage = await page.locator('span[data-aura-class="forceActionsText"]').innerText();
    console.log(toastMessage);
    expect(toastMessage).toContain(`Lead \"${FirstName} ${LastName}\" was deleted`);
    console.log("\nLead deleted toast message is verified\n");
    await page.getByPlaceholder("Search this list...").fill(LastName);
    await page.keyboard.press("Enter");
    const searchResultMsg = await page.locator('lightning-formatted-rich-text[class="slds-rich-text-editor__output"]').innerText();
    console.log(`Search Results message after deleting the lead : ${searchResultMsg}`);
    expect(searchResultMsg).toBe('No items to display.');
    

})

