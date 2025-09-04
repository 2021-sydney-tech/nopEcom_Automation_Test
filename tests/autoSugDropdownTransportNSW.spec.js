const {test, expect} = require('@playwright/test');

test("Auto Suggest Dropdown Transport NSW Test", async ({ page }) => {
    await page.goto("https://transportnsw.info/trip#/trip");

    const input = page.locator('#tniFromTripLocation');
    await input.fill("Parramatta");

    // Wait for dropdown to load
    await page.waitForSelector('li.ng-star-inserted');

    // Click the exact match inside the inner div
    await page.locator('div.list-group-item-title', { hasText: "Parramatta Station" }).click();

    // Assertion
    await expect(page.locator('#tniFromTripLocation')).toHaveValue(/Parramatta Station/);
    await page.screenshot({ path: 'from-suburb-selection.png' });
    await page.waitForTimeout(5000);
});
