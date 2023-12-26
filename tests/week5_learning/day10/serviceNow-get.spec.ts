import {chromium, test} from "@playwright/test";

test("Learn API Request",async ({request}) => {

    
const response = await request.get("https://dev215855.service-now.com/api/now/table/incident/4f08a839475331104739d879316d4372",

{
    headers:{
        "Content-Type": 'application/json',
        "Authorization": 'Basic YWRtaW46SGFja2luZyMw'
    }
});


//If there is any text in the scenario (in Response Body)
const responseBody = await response.text();
console.log(`The Response Body is : ${responseBody}`);
let parsedJson = JSON.parse(responseBody);
console.log(`-------------------Parsed Json------------------------`);
console.log(parsedJson);

const statusCode = response.status();
console.log(`The Status code of the response after get method : ${statusCode}\n`);


})