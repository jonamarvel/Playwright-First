import { test } from "@playwright/test";
import { LoginPage } from "./sfLoginPage";

test("Salesforce : User can login successfully",async({page}) => {
    const loginPage = new LoginPage();
    await page.goto("https://login.salesforce.com/");
    await loginPage.login(page, "jonamarvel@testleaf.com", "Testleaf123");
    console.log("Logged in successfully");
    
    
})