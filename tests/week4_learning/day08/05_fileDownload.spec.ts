import { test, chromium, expect} from "@playwright/test";
import path from "path";

test("File Download",async ({page}) => {


   //Scenario 1 : when you have input type = file

    await page.goto("https://leafground.com/file.xhtml");

    const fileDownloadPromise = page.waitForEvent('download');
    await page.getByRole('button',{name: "Download"}).click();
    const fileDownloader = await fileDownloadPromise;
    await page.waitForTimeout(5000);

    await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()));
    await page.waitForTimeout(5000);

})