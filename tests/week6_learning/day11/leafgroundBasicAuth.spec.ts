import { chromium, test } from "@playwright/test";

test(`Leafground : Basic Authentication`, async () => {
    const userDataDir = './myUserDataDir'
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        // httpCredentials --> To fill the login credentials without opening the popup
        httpCredentials:{
            username : "admin",
            password: "testleaf",
            origin: "http://leafground.com:8090/" //only for this website we are suppose to use the httpcredentials
        }

    })
    const page = await context.newPage();
    
    //To launch leafground application
    await page.goto("https://leafground.com/auth.xhtml");
    //To click Basic authentication button
    await page.getByRole('button', {name: "Basic Auth"}).click();
    await page.close();
    await context.close();

})
