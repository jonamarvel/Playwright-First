import { test } from "@playwright/test";
import { LTLoginPage } from "./05_LoginPage";

let title;
test("LeafTaps : To login into LeafTaps using base class and derived class : Valid User Credentials",async ({page}) => {

    const LTloginPageObj = new LTLoginPage(page);
    await LTloginPageObj.navigateTo("http://leaftaps.com/opentaps/control/login");
    await LTloginPageObj.login("Demosalesmanager","crmsfa");
    await LTloginPageObj.isLoginErrorDisplayed();
    await LTloginPageObj.getTitle();
    
})
test("LeafTaps : To login into LeafTaps using base class and derived class : Invalid user credentials",async ({page}) => {

    const LTloginPageObj = new LTLoginPage(page);
    await LTloginPageObj.navigateTo("http://leaftaps.com/opentaps/control/login");
    await LTloginPageObj.login("Demosalesmanager","crmsda");
    await LTloginPageObj.isLoginErrorDisplayed();
      
  })