import { chromium } from "playwright";

async function mulitUserTest() {
    let browser = await chromium.launch({ headless: true });
    //Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login")
    console.log("Admin: on login page")

    //viewer
    let viwercontext = await browser.newContext();
    let viwerPage = await viwercontext.newPage();
    await viwerPage.goto("https://app.vwo.com/login")
    console.log("Viewer: in login page")

    await adminContext.close();
    await viwercontext.close();
    await browser.close()

}
mulitUserTest()