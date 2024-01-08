import { test,expect } from "@playwright/test";
import loginData from "../testdata/SFLoginInfo.json";
import { getAccessToken } from "../week5_learning/day10/authHelper.spec";

test("Salesforce : To create a Dahboard from Playwright",async ({page}) => {
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
        await page.waitForTimeout(2000);
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
    //To type "Dashborads" in search box and click Dashboards link
    await page.getByPlaceholder("Search apps or items...").fill("Dashboards");
    await page.locator('a[data-label="Dashboards"]').click();
    await page.waitForTimeout(3000);
    //To click on "New Dashboard" button
    const newDashboardButton = page.getByRole('button', { name: 'New Dashboard' });
    await expect(newDashboardButton).toBeVisible();
    await newDashboardButton.click();

    //To fill Dashboard name and description using frame locators

    const frameLocator = page.frameLocator("iframe").last();
    await frameLocator.locator("#dashboardNameInput").fill("Salesforce Automation by Jona");
    await frameLocator.locator("#dashboardDescriptionInput").fill("Testing - Created using playwright code");
    const createButton = frameLocator.getByRole('button',{name: "Create"});
    await expect(createButton).toBeEnabled();
    await createButton.click();
    await page.waitForTimeout(5000);
    //To verify dashboard title
    const frameLocator1 = page.frameLocator("iframe");
    await frameLocator1.getByRole('button',{name: "Edit Dashboard name"}).click();
    const dashboardTitle = await frameLocator1.locator("#edit-dashboard-title").inputValue();
    expect(dashboardTitle).toContain("Jona");
    console.log("\nDashboard title is verified");
    console.log(`\nDashboard "${dashboardTitle}" is created successfully`);
    //To click save button
    await frameLocator1.locator('button[class="slds-button slds-button_neutral save"]').click();
    await page.waitForTimeout(3000);
    //To verify Save toast message
    const toastMessage = await page.locator('span[data-aura-class="forceActionsText"]').innerText();
    expect(toastMessage).toBe("Dashboard saved")
    console.log("\nDashboard saved toast message is verified\n");
})

//To get access token using function getAccessToken of authHelper file
let accessToken: string;
let instanceURL: string;
let getDBid: string;
test ("Use accessToken from getaccessToken function in json file",async () => {
const authData = await getAccessToken();
accessToken = authData.accessToken;
instanceURL = authData.instanceURL;
})

//To get a name and id of created dashboard
test("To get created dashboard name and id using get request",async ({request}) => {

const getDBinfo = await request.get(`${instanceURL}/services/data/v59.0/sobjects/Dashboard`,{
    headers:{
        "Authorization": `Bearer ${accessToken}`,
        "Connection": "keep-alive"
    }
})
const getDBinfoJson = await getDBinfo.json();
console.log(getDBinfoJson);
let firstDBRecentItem = getDBinfoJson.recentItems[0];
getDBid = firstDBRecentItem.Id;
console.log(`\nThe id of created dashboard is : ${getDBid}`);
const getStatusCode = getDBinfo.status();
console.log(`\nStatus code after creating dashboard is : ${getStatusCode}`);
expect(getStatusCode).toBe(200);
console.log("\nThe dashboard info has been received successfully\n");
})

//To delete the created dashboard
test("To delete the created dashboard",async ({request}) => {
    const deleteDB = await request.delete(`${instanceURL}/services/data/v59.0/sobjects/Dashboard/${getDBid}`,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Connection": "keep-alive"
        }
    })
    const deleteStatuscode = deleteDB.status();
    console.log(`\nStatus code after deleting dashboard is : ${deleteStatuscode}`);
    expect(deleteStatuscode).toBe(204);
    console.log("\nThe dashboard has been successfully deleted\n");
    
})