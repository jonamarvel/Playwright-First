//Home assignments
// 2 .ServiceNow -Ordering Mobile(Frames)
// ---------------------------
// Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

// 1. Launch ServiceNow application
// 2. Login with valid credentials 
// 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
// 4. Click on  mobiles
// 5. Select Apple iphone13pro
// 6. Choose yes option in lost or broken iPhone
// 7. Enter phonenumber as 99 in original phonenumber field
// 8. Select Unlimited from the dropdown in Monthly data allowance
// 9. Update color field to SierraBlue and storage field to 512GB
// 10. Click on Order now option
// 11. Verify order is placed

 
//Sample instance and credentials
//Url to be loaded
// https://dev205797.service-now.com/
// Credentials
// Username: admin
// Password; Testleaf@123

 
import { test, chromium, expect } from "@playwright/test";

test("Service Now : To order a Mobile" ,async ({page}) => {
    
    //To login into Service Now
    await page.goto("https://dev215855.service-now.com");
    await page.locator("#user_name").fill("admin");
    await page.locator("#user_password").fill("Hacking#0");
    await page.locator("#sysverb_login").click();
    //To click on All in Service now app
    await page.getByRole('button', {name: "All"}).click();
    //To fill Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
    await page.getByPlaceholder("Filter").fill("Service Catalog");
    await page.locator('a').filter({hasText: "Service CatalogRequest"}).click();
    //await page.keyboard.press("Enter");
    await page.waitForTimeout(5000); 
    //To click on  Mobiles using frame locator
    const frameLocator = page.frameLocator('iframe').first();
    await frameLocator.locator('a[aria-label="Mobiles. Cell phones to meet your business needs."]').click();
    //To wait for sometime
    await page.waitForTimeout(3000);
    //To Select Apple iphone13pro using frame object
    //await page.getByRole('link', {name: 'Apple iPhone 13 pro'}).click();
    //await page.locator('a[class="service_catalog"]').filter({hasText: "Apple iPhone 13 pro"}).click();
    //const frameObj = page.frame({url :"https://dev215855.service-now.com/com.glideapp.servicecatalog_category_view.do?v=1&sysparm_parent=d68eb4d637b1300054b6a3549dbe5db2&sysparm_catalog=e0d08b13c3330100c8b837659bba8fb4&sysparm_catalog_view=catalog_default"});
    const frameObj = page.frame({name : "gsft_main" });
    await frameObj?.locator('a[class="service_catalog"]').nth(2).click();
    await page.waitForTimeout(3000);
    // To Choose yes option in lost or broken iPhone using frame object
    const frameObj1 = page.frame({name : "gsft_main" });
    await frameObj1?.locator('label[class="radio-label"]').first().click();
    const phoneNumberQuestion = await frameObj1?.getByRole('heading', { name: ' What was the original phone number?'}).innerText();
    console.log(phoneNumberQuestion);
    expect(phoneNumberQuestion).toBe("What was the original phone number?");
    //To Enter phonenumber as 99 in original phonenumber field
    await frameObj1?.locator("input[class*='sc-content-pad form-control']").fill("9944181340");
    //To Select Unlimited from the dropdown in Monthly data allowance
    await frameObj1?.locator('select[class="form-control cat_item_option "]').selectOption("unlimited"); 
    //To Update color field to SierraBlue and storage field to 512GB
    await frameObj1?.locator('label[class="radio-label"]').nth(6).click();
    await frameObj1?.locator('label[class="radio-label"]').nth(9).click();
    await page.waitForTimeout(3000);
    //To Click on Order now option
    await frameObj1?.getByRole('button', {name : 'Order Now'}).click();
    //To wait for sometime
    await page.waitForTimeout(3000);
    //To Verify order is placed
    const frameObj2 = page.frame({name : "gsft_main" });
    const orderSuccess = await frameObj2?.locator('span[aria-live="assertive"]').innerText();
    expect(orderSuccess).toBe('Thank you, your request has been submitted');
    console.log(orderSuccess);
    await page.waitForTimeout(5000);  
})
