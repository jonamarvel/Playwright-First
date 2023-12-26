import { test, chromium, expect } from "@playwright/test";

let accessToken: any;
let instanceURL: any;
// To execute all tests in sequential in playwright.config.ts =>  set => fullyParallel: false

test("Salesforce : To get the access token",async ({request}) => {
    console.log("\n------------Getting Access Token from Salesforce-----------\n");
    //To pass client id, client secret, username, password
    const clientId = '3MVG95mg0lk4baticTbhuDLz2us58H9H89oITvyCrll_bXYmd9V5ag9ZuVoLptk9u3SUp09sVWnqMwqVQb74V';
    const clientSecret = '9433F8CC3276ADA9F534B3C63407681EF42573987DDBF61DEF0C04B67103F1CB';
    const username = 'jonamarvel@testleaf.com';
    const password = 'Testleaf123';
    const url = 'https://login.salesforce.com/services/oauth2/token';

    const generatingToken = await request.post(url,{
        headers:{
            "Content-Type" : 'application/x-www-form-urlencoded',
            "Connection": "keep-alive"
        },
        form:{
            "grant_type": "password",
            "client_id": clientId,
            "client_secret": clientSecret,
            "username": username,
            "password": password
        }
    });

    const generatingTokenJson = await generatingToken.json();
    console.log(`\nResponse from Salesforce application to get the access token\n`);
    console.log(generatingTokenJson);
    
    accessToken = generatingTokenJson.access_token;
    instanceURL = generatingTokenJson.instance_url;
    let tokenType = generatingTokenJson.token_type;
    console.log("\n------------Getting Access Token from Salesforce-----------\n");
    console.log(`\nYour instance URL is : ${instanceURL}`);
    console.log(`\nHeaders --> 'Authorization' value :`)
    console.log(`\n${tokenType} ${accessToken}`);
 
    });

    test("Salesforce : To create a new Opportunity",async ({request}) => {
        console.log("\n------------Create Opportunity Scenario using Post method-----------\n");
       /*  //To pass a formated date value
        let date = "25/12/2023";
        let parts = date.split("/");
        let formatedDate = `${parts[2]}-${parts[1]}-${parts[0]}`; 
        
        */

        let opportunityInstanceURL = `${instanceURL}/services/data/v59.0/sobjects/Opportunity/`;
        const opportunity = await request.post(opportunityInstanceURL, {
            headers:{
                "Authorization" : `Bearer ${accessToken}`,
                "Connection" : "keep-alive"
            },
            data:{
                "Name": "Playwright Opportunity 1",
                "StageName": "Prospecting",
                "CloseDate": "2023-12-28", //here instead of this date value we can pass the formated date value from above comment
                "Type": "Existing Customer - Upgrade"

            }

        })
        const oppResponse = await opportunity.json();
        console.log(`\nResponse after creating Opportunity\n`);
        console.log(oppResponse);
        const statusCode = opportunity.status();
        console.log(`\nThe Status code of the response after creating new Opportunity is : ${statusCode}\n`);
        expect(statusCode).toBe(201);
        
    });
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



