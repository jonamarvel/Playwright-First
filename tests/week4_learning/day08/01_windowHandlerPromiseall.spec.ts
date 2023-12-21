
import { test, chromium, expect, Page } from "@playwright/test";
import { title } from "process";

//include both page and context fixtures
test("To handle windows using Promise",async ({page,context}) => {

    await page.goto("https://leafground.com/window.xhtml");

    //To declare all promises as an array when we have multiple promises to get resolved

    //[newPage] This is called Destructuring
   const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open", {exact: true}).click(),

    ])

    console.log(newPage.url());
    
    await newPage.waitForTimeout(5000);

    await expect(newPage).toHaveURL("https://leafground.com/dashboard.xhtml");
    
    await newPage.waitForTimeout(2000);
    //To fill email in the opened window
    await newPage.fill("#email", "jonah.tsm@gmail.com");
    await newPage.waitForTimeout(2000);
    
    //To close window which we opened in step 13
    await newPage.close();
    await page.waitForTimeout(2000);

    //To click on Home page in the first window
    await page.click('i[class="pi pi-home"]')
    await page.waitForTimeout(2000);
    
})


test.only("To test multiple Tabs",async ({page,context}) => {

    let webPage: any;

    await page.goto("https://leafground.com/window.xhtml");

    //To declare all promises as an array when we have multiple promises to get resolved

    //[multiplePage] This is called Destructuring
   const [multiplePage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open Multiple", {exact: true}).click(),

    ])
    await multiplePage.waitForLoadState('load');
    //number of pages getting opened
    const pages  = multiplePage.context().pages();
    console.log(`Number of pages : ${pages.length}`);
    
    pages.forEach(tabs => {
        console.log(tabs.url());
        //console.log(tabs.title());

    })

    pages[1].bringToFront();
    await page.waitForTimeout(5000);
    
    for (let index=0; index < pages.length; index++) {
        
        await pages[index].waitForLoadState('load');
        const title = await pages[index].title();
        console.log(title);

        if (title === 'Web Table') {
            webPage = pages[index];            
        }

    }
    await webPage.getByPlaceholder("input[placeholder='Search']").fill("Amy Elsner");

    await webPage.waitForTimeout(5000);

})