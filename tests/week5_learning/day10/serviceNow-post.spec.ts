import {chromium, test} from "@playwright/test";

test("Learn API Request",async ({request}) => {

/* 
If we are not using request fixture we can use the below code


const browser = await chromium.launch();
const browserContext = await browser.newContext();

//From browser context we can get api request context
const apiRequestContext = browserContext.request;

//From page we can use api request context
const page = await browserContext.newPage();
const pageapiRequestContext = page.request; 

*/
  
//To save the end point url
const response = await request.post("https://dev215855.service-now.com/api/now/table/incident",

{
    headers:{
        "Content-Type": 'application/json',
        "Authorization": 'Basic YWRtaW46SGFja2luZyMw'
    },
    data:{
        "short_description":"Created using Playwright"
    }
});

const responseBody = await response.json();
console.log(`-------------------Response Body------------------------`);
console.log(responseBody);

const responseHeaders = response.headers();
console.log(`-------------------Response Headers---------------------`);
console.log(responseHeaders);

const statusCode = response.status();
console.log(`The Status code of the response after creating new incident is : ${statusCode}\n`);

const sysID = responseBody.result.sys_id;
console.log(`System ID is : ${sysID}`);

})