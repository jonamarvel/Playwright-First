import { chromium, test } from "@playwright/test";


test("To verify Geo Location",async () => {
const browser = await chromium.launch();
const context = await browser.newContext({
    geolocation:{
        longitude: 12.492507,
        latitude: 41.889938,
    },
    permissions: ['geolocation'],
})
const page = await context.newPage();

await page.goto("https://www.openstreetmap.org/");
    
})