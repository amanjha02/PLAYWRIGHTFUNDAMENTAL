import { test, expect } from '@playwright/test'

test('Verify total balance check', async ({ page }) => {
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app");
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder("John Doe").fill("Aman");
    await page.getByPlaceholder("you@example.com").fill("aman@abc.com");
    await page.getByPlaceholder("••••••••").fill("Aman123");
    await page.getByRole('button', { name: 'Create Account' }).click();
    await page.waitForTimeout(5000);
    const beforeTransactionBalance = await page.getByText('Total Balance').locator('xpath=following-sibling::h3')
        .innerText();
    console.log("before transaction balance:-" + beforeTransactionBalance)
    await page.getByText("Transfer Funds").click();
    let amountToBetranser = "10000";
    await page.getByPlaceholder('0.00').fill(amountToBetranser);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Dashboard' }).click();
    const afterTransactionBalance = await page.getByText('Total Balance').locator('xpath=following-sibling::h3')
        .innerText();
    console.log("After transaction balance:-" + afterTransactionBalance);
    await expect(afterTransactionBalance).toBe('$40,000.00');

})