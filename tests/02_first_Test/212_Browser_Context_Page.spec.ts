import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {
    let browser: Browser = await chromium.launch({ headless: false })
    console.log("Browser launch")

    let context: BrowserContext = await browser.newContext()

    let page: Page = await context.newPage()

    await page.goto("https://www.google.com/")
    console.log("Page title is ", await page.title())

    await page.close()
    await context.close()
    await browser.close()



}

run()
