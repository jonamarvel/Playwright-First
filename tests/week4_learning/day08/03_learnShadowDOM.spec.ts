import { test, chromium} from "@playwright/test";

test("Shadow DOM in Serive Now Application",async ({page}) => {

    page.goto("https://dev205797.service-now.com/");

    await page.locator("#user_name").fill("admin");
    await page.locator("#user_password").fill("Testleaf@123");
    await page.locator("#sysverb_login").click();
    await page.getByRole('button', {name : "All"}).click();
    await page.getByPlaceholder("Filter").fill("Incidents");
    await page.getByLabel('Incidents', { exact: true }).click();


})