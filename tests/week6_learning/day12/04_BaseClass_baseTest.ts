import { Browser, BrowserContext, chromium, Page } from "playwright";

export class BaseTest {
    browser: Browser|null = null;
    page: Page|null = null;

    async setup(){
        this.browser = await chromium.launch();
        const browserContext= await this.browser.newContext();
        this.page = await browserContext.newPage();

    }
    async teardown(){
        if (this.page) {
            await this.page.close();
        } else if(this.browser) {
            await this.browser.close();
            
        }
    }
}