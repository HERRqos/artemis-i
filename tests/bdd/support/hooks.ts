import { Before,BeforeAll, After, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './world';

// Playwright has a longer def tiemout per step (cucumber 5s)
setDefaultTimeout(60*1000);
let browser: Browser;
// running browser once for the whole run
BeforeAll(async function () {
    browser=await chromium.launch({headless:true});
});
//  clean isolated context + page per sceneario
Before(async function (this: CustomWorld) {
    this.browser=browser;
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
});
// Tear dwon per scenerio
After(async function (this:CustomWorld) {
    await this.page?.close();
    await this.context?.close();
})

//close browser at the end

AfterAll(async function () {
    await browser?.close();
});