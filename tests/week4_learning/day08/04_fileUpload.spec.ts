import { test, expect} from "@playwright/test";
import path from "path";

test("File Upload : Scenrio 1 - type = file",async ({page}) => {


   //Scenario 1 : when you have input type = file

    await page.goto("https://leafground.com/file.xhtml");

    const card = page.locator(".card").filter ({has:page.getByText("Basic Upload")});
    await page.waitForTimeout(5000);
    //setInputFiles mimic the manual process of uploading file without opening the popup
    //dirname : /Users/rajan.tsm/Desktop/Playwright Workspace/Playwright First/tests/week4_learning/day08
    await card.locator("input[type='file']").setInputFiles([path.join(__dirname,'downloadimage.png')]);
    await expect(card.locator(".ui-fileupload-filename")).toContainText("downloadimage.png");
    await page.waitForTimeout(5000);



})



test.only("File Upload : Scenrio 2 using event handler",async ({page}) => {


    //Scenario 1 : when you have input type = file
 
    await page.goto("https://the-internet.herokuapp.com/upload");

    //To resolve promise  by considering as a Event Listener
    const filechooserPromise = page.waitForEvent('filechooser', {timeout: 5000});
    await page.locator("#file-upload").click();
    const filechooser = await filechooserPromise;

    await filechooser.setFiles([path.join(__dirname,'downloadimage.png')]);

    //await expect(page.locator("#drag-drop-upload")).toHaveClass("dz-success-mark");

    await page.waitForTimeout(7000);

 })