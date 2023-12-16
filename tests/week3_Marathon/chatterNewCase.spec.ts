import { chromium, expect, test } from "@playwright/test";

test("Salesforce : To create a Lead and convert into Opportunity",async ({page}) => {

   //To go to salesforce page
   await page.goto("https://login.salesforce.com");

   //To wait for page to launch
   await page.waitForTimeout(1000);

   //To fill user name and password
   await page.locator("#username").fill('jonamarvel@testleaf.com');

   await page.locator("#password").fill('Testleaf123');

   //To login into Salesforce
   await page.locator("#Login").click();

   //To click App Launcher icon
   await page.locator('.slds-icon-waffle').click();

   expect(page.locator('.slds-icon-waffle')).toBeVisible();

   await page.waitForTimeout(2000);

   //To click View All 
   await page.locator('[aria-label="View All Applications"]').click();

   //To goto Search app textbox and enter Service and press enter
   await page.getByPlaceholder('Search apps or items...').fill('Service');
   page.keyboard.press("Enter");
  
   await page.waitForTimeout(1000);

  //To click on Service Tile
  await page.locator('div[data-name="Service"]').click();

  //To click Cases Tab
  await page.locator('a[title="Cases"]').click();

  //To click on New button
  await page.locator('div[title ="New"]').click();

  //To click on Contact Name field to search contacts
  await page.locator('input[placeholder="Search Contacts..."]').click();

  //To click on New Contact from list
  await page.locator('lightning-base-combobox-item[data-value="actionCreateNew"]').click();

    //To Click on Salutation
    await page.locator('div[class^="salutation"] a[class="select"]').click();

    //To set Mrs. for Salutation
    await page.locator('a[title="Mrs."]').click();

    //To Enter First Name
    await page.getByPlaceholder("First Name").fill("Aaron");

    //To Enter Last Name
    await page.getByPlaceholder("Last Name").fill("James")

    //To click on Save button
    await page.locator('button[title="Save"]').click();

    //To verify the toast message for Contact successful creation
    const contactToastMessage=await page.locator('div[class="toastContent slds-notify__content"]').innerText();
    expect(contactToastMessage).toContain("Contact was created");
    console.log(contactToastMessage);
    expect(page.locator('div[class="toastContent slds-notify__content"]')).toBeHidden;

    await page.waitForTimeout(1000);

  //To Click on Account Name input field to search Accounts
  await page.locator('input[placeholder="Search Accounts..."]').click();

    await page.waitForTimeout(2000);

    //To click on New Account from list
    await page.locator('span[title="New Account"]').click();

    //To fill Account Name
    await page.locator('input[class=" input"]').first().fill("RoyalA Limited");

    //To fill Account Number
    await page.locator('input[class=" input"]').nth(3).fill("001");

    //To click on Rating dropdown
    await page.locator('a[class="select"]').first().click();

    //To select Hot from Rating dropdown
    await page.locator('a[title="Hot"]').click();

    //To click on Save button
    await page.locator('button[title="Save"]').click();

    await page.waitForTimeout(2000);

    //To verify toast message for Account successful creation
    const accountToastMessage = await page.locator('span[class="toastMessage slds-text-heading--small forceActionsText"]').innerText();
    expect(accountToastMessage).toContain("Account");
    console.log(accountToastMessage);
    expect (page.locator('span[class="toastMessage slds-text-heading--small forceActionsText"]')).toBeHidden();

  //To click on Status - New
  await page.locator('button[aria-label="Status, New"]').click();

  //To click on Priority dropdown
  await page.locator('button[aria-label="Priority, Medium"]').click();

  //To select High for Priority dropdown
  await page.locator('span[title="High"]').click();

  //To click on Case Origin
  await page.locator('button[aria-label="Case Origin, --None--"]').click();

  //To select Email for Case Origin
  await page.locator('span[title="Email"]').click();

  //To fill Subject
  await page.locator('input[name="Subject"]').fill("Product Return Request");

  //To fill Description
  await page.locator('textarea[class="slds-textarea"]').first().fill("Requesting a return for a defective product");

  //To click on Save button for New Case creation
  await page.locator('button[name="SaveEdit"]').click();

  //To verify toase message for Case successfull creation
  const caseToastMessage = await page.locator('span[class^="toastMessage"]').innerText();
  expect(caseToastMessage).toContain("was created");
  console.log(caseToastMessage);
  await page.waitForTimeout(2000);
  expect (page.locator('span[class^="toastMessage"]')).toBeHidden();

  //To Edit Status field in Details section
  await page.locator('button[title="Edit Status"]').click();

  //To select Escalated from Status dropdown
  await page.locator('button[aria-label="Status, New"]').click();
  await page.locator('span[title="Escalated"]').click();

  //To click on Save button
  await page.locator('button[name="SaveEdit"]').click();

  await page.waitForTimeout(2000);

  //To verify updated value in Status field
  const updatedStatus = await page.locator('p[class^="fieldComponent"]').nth(1).innerText();
  console.log(`Updated Status of the Case is ${updatedStatus}`);
  expect(updatedStatus).toContain("Escalated");

  //To click on Share an update field
  await page.locator('button[title="Share an update..."]').click();

  //To fill valid data in Share an update field
  await page.locator('div[data-placeholder="Share an update..."]').fill("Hello! New Case has been created!");

  //To click on Share button
  await page.locator('button[title="Click, or press Ctrl+Enter"]').click();

  //To verify that Shared message appeared in All updates section
  const sharedMessage = await page.locator('div[class="feedBodyInner Desktop oneApp"] span[class="uiOutputText"]').first().innerText();
  expect(sharedMessage).toContain("Hello!");
  console.log(sharedMessage);
    
  //To click on dropdown icon to choose Like on Chatter option
  await page.locator('a[class^="cuf-feedItemActionTrigger"] lightning-icon[icon-name="utility:down"] svg[data-key="down"]').first().click();

  //To click on Like on Chatter option
  await page.locator('li[title="Like on Chatter"] a[role="menuitem"]').first().click();

  //To verify post liked toast message
  const postLikedToastMessage = await page.locator('span[class="toastMessage slds-text-heading--small forceActionsText"]').innerText();
  expect(postLikedToastMessage).toContain("Post was liked.");
  console.log(postLikedToastMessage);

  //To click on Chatter Tab
  await page.locator('a[title="Chatter"]').click();

  await page.waitForTimeout(1000);

  //To search for the liked post in Search this feed input box
  await page.getByRole('tab',{name: "Post"}).click();
  await page.locator('input[aria-label="Search this feed..."]').last().fill(sharedMessage);
  await page.keyboard.press("Enter");

  //To verify post liked by user in Chatter Tab
  const chatterPostliked = await page.getByLabel("Jona Marvel Nayagam").locator('div[class^="cuf-feedBodyText"] span[dir="ltr"]').innerText();
  console.log(chatterPostliked);
  expect(chatterPostliked).toBe(sharedMessage);




})