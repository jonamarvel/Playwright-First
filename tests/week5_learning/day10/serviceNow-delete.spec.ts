import {chromium, test} from "@playwright/test";

test("Learn API Request",async ({request}) => {

    
const response = await request.delete("https://dev215855.service-now.com/api/now/table/incident/4f08a839475331104739d879316d4372",

{
    headers:{
        "Content-Type": 'application/json',
        "Authorization": 'Basic YWRtaW46SGFja2luZyMw'
    }
});


console.log(`The status code after deleting  : ${response.status()}`);


})