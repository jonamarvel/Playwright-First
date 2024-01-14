import { test } from "@playwright/test";

test("Salesforce : To launch a browser", async({page}) => {



//Let the API intercepted
//Use Caes :Read the session
//Event listener

//Scenario where we user API interception
// API will independently work fine
//It will not work fine when integrated with Web (reactJS)
//Intercept and confirm that particulat API is being called or not

page.route("**/aura?preloadActions",async (route, request) => {
    if (request.method()=== 'POST') {
        
        console.log(request.url());
        console.log(await request.allHeaders());
    
        //const resp = await request.response();
        //const respBody = await resp?.body();
        //console.log(respBody);     

    }
    else{
        route.continue();
    }
    
})

await page.goto("https://login.salesforce.com/");
//await page.locator("#username").fill('jonamarvel@testleaf.com');
await page.fill("#username", 'jonamarvel@testleaf.com');

//await page.locator("#password").fill('Testleaf123');
await page.fill("#password", 'Testleaf123');

await page.click('#Login');

const title = await page.title();
console.log(`\n Page Title is : ${title}`);

const appLauncherLocator = page.locator(".slds-icon-waffle")

await appLauncherLocator.click()

const viewAllLocator = page.getByLabel("View All Applications")
await viewAllLocator.click()




})

