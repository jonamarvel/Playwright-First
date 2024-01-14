import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
    retryPage:async ({page}, use, testInfo) => {

        console.log("I am from BaseTest that extends");

        if (testInfo.retry) {
            console.log("The testcase is in retry mode");
            
            testInfo.slow;

        } 
        
        await use(page);
    },
})