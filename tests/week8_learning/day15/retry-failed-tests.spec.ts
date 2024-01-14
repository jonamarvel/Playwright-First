import { test } from './custom-hooks';

test("To launch a browser", async({retryPage}) => {
    /* 

    Instead of just rerunnin the failed tests with same time,
    Can I slow down the test execution.. like slow mode and rerun !
    First Time :
    1) Launch --> Click ---> type
    
    Retryr 1 :
     1) Launch --> 5 seconds --> Click --> 5 seconds ---> type

     Hooks or Fixtures can apply to slow down the process

     Custom Hooks
    */


await retryPage.goto("https://login.salesforce.com/");
//await retryPage.waitForTimeout(5000);
await retryPage.locator("#username").fill('jonamarvel@testleaf.com')
await retryPage.locator("#passwordwrong").fill('Testleaf123');
await retryPage.locator('#Login').click();
await retryPage.waitForLoadState('load');
const title = await retryPage.title();
console.log(`\n Page Title is : ${title}`);
const url = retryPage.url();
console.log(`\n URL of the loaded page is : ${url}`);


})

