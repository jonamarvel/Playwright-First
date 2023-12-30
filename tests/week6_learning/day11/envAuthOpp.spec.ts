import { test,chromium, expect } from "@playwright/test";
import { getSFAccessToken } from "./authHelper_usingenv.spec";

let accessToken: string;
let instanceURL: string;

test('Use access token from getAccessToken function from Authhelper json',async () => {
    const authData = await getSFAccessToken();
    accessToken = authData.accessToken;
    instanceURL = authData.instanceURL;
})

test("Salesforce : To create a new Opportunity",async ({request}) => {
    console.log("\n------------Create Opportunity Scenario using Post method-----------\n");
    let opportunityInstanceURL = `${instanceURL}/services/data/v59.0/sobjects/Opportunity/`;
    const opportunity = await request.post(opportunityInstanceURL, {
        headers:{
            "Authorization" : `Bearer ${accessToken}`,
            "Connection" : "keep-alive"
        },
        data:{
            "Name": "Playwright Opportunity 2 using AuthHelper",
            "StageName": "Prospecting",
            "CloseDate": "2023-12-28",
            "Type": "Existing Customer - Upgrade"

        }

    })
    const oppResponse = await opportunity.json();
    console.log(`\nResponse after creating Opportunity\n`);
    console.log(oppResponse);
    const statusCode = opportunity.status();
    console.log(`\nThe Status code of the response after creating new Opportunity is : ${statusCode}\n`);
    expect(statusCode).toBe(201);
    
})

test("Salesforce : Update the created Opportunity",async ({request}) => {
    console.log("\n------------Update Opportunity Scenario using Patch Method-----------\n");
    let opportunityInstanceURL = `${instanceURL}/services/data/v59.0/sobjects/Opportunity/0065h00000OsyjHAAR`;
    const update = await request.patch(opportunityInstanceURL, {
        headers:{
                "Authorization" : `Bearer ${accessToken}`,
                "Connection" : "keep-alive"
            },
        data:{
                "Name": "New Opportunity",
                "StageName": "Qualification",
                "CloseDate": "2023-12-05",
                "Type": "Existing Customer - Replacement"

            }
        })
        const statusCode = update.status();
        console.log(`\nThe Status code of the response after updating Opportunity is : ${statusCode}\n`);
        expect(statusCode).toBe(204);

 })