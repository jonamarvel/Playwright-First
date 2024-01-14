import { test } from "./custom-fixtures.spec";

test.describe("Salesforce Testcases",async () => {


    test("Salesforce : To launch a browser", async({page}) => {


        const title = await page.title();
        console.log(`\n Page Title is : ${title}`);
        
        
        })
    
})


