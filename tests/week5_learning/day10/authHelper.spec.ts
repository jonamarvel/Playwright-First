import { chromium } from "@playwright/test";

async function getAccessToken() {
    
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    console.log("\n------------Getting Access Token from Salesforce-----------\n");
    //To pass client id, client secret, username, password
    const clientId = '3MVG95mg0lk4baticTbhuDLz2us58H9H89oITvyCrll_bXYmd9V5ag9ZuVoLptk9u3SUp09sVWnqMwqVQb74V';
    const clientSecret = '9433F8CC3276ADA9F534B3C63407681EF42573987DDBF61DEF0C04B67103F1CB';
    const username = 'jonamarvel@testleaf.com';
    const password = 'Testleaf123';
    const url = 'https://login.salesforce.com/services/oauth2/token';

    const generatingToken = await apiRequestContext.post(url,{
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
    
    return{
        accessToken: generatingTokenJson.access_token,
        instanceURL: generatingTokenJson.instance_url
    }
}
export {getAccessToken};
