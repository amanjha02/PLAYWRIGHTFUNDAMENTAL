import { test, expect } from '@playwright/test';

test('Verify the title of the app.vwo.com', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/login');

    let title = await page.title();

    console.log("Page Title is +", title)
    await expect(page).toHaveTitle("Login - VWO")
})

