import { test, chromium } from "@playwright/test";
import env from 'dotenv';
env.config();

async function getSFAccessToken() {
    
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    console.log("\n------------Getting Access Token from Salesforce-----------\n");
    //To pass client id, client secret, username, password
    const clientId = process.env.sf_clientId as string;
    const clientSecret = process.env.sf_clientSecret as string;
    const username = process.env.sf_username as string;
    const password = process.env.sf_password as string;
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
export {getSFAccessToken};
