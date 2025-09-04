const {test, expect} = require('@playwright/test');

test("Assertions Test", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register/");
    await expect(page).toHaveURL(/.*register/);

    // Validate the title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    // Validate the Newsletter is checked
    await expect(page.locator('input#Newsletter')).toBeChecked();

    // Validate the Register button
    const registerBtn = page.locator('#register-button');
    await expect(registerBtn).toHaveAttribute('type', 'submit');

    await expect(page.locator('.page-title h1')).toHaveText('Register');

    // Validate the email input
    const emailInput = page.locator('#Email');
    await expect(emailInput).toBeVisible();
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');
    

});