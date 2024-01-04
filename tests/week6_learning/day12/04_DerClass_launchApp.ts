import { error } from "console";
import { BaseTest } from "./04_BaseClass_baseTest";

class LaunchApp extends BaseTest{
    async visitAndCheckTitle(url:string, expectedTitle:string){
        if(!this.page) throw new Error("Page is not initialized");
        await this.page.goto(url);
        const title = await this.page.title();
        console.assert(title === expectedTitle,`Expected Title to be '${expectedTitle}', but found '${title}'`)      
    }
}
(async()=>{
    const test = new LaunchApp();
    try{
        await test.setup();
        await test.visitAndCheckTitle("http://leaftaps.com/opentaps/control/main", "Leaftaps - TestLeaf Automation Platform");
        console.log("Test is passed");

    }
    catch{
        console.error("Test failed", error);
    }
    //irrespective of pass or failure we can use finally block to execute some set of codes
    finally{
        await test.teardown();
    }

})()//Immediate invocation method;