import { test } from "@playwright/test";
import fs from 'fs'; // fs(file system) module is coming from node js module --> Allows to work with the file system
import path from 'path'; // To locate the path of a file --> transforming and handling the file paths
import { parse } from "csv-parse/sync"; //parse function from another node js module --> parsing csv file to java script (JS) objects

//fs.readFileSync - reads tge contebt from .csv file
const records = parse(fs.readFileSync(path.join(__dirname, "SFloginData.csv")),
{
    columns : true, // This will treat the first row in the csv file as column names
    skip_empty_lines : true,
});

for (const record of records)
{

test(`Salesforce : Reading the data from csv file - Login from ${record.test_case}`,async ({page}) => {
    //To login into Salesforce
    await page.goto("https://login.salesforce.com/");
    //To fill user name
    await page.locator("#username").fill(record.username);
    //To fill password
    await page.locator("#password").fill(record.password);
    //To click login
    await page.locator("#Login").click();

})

}