const {test, expect} = require('@playwright/test');

test('Hidden Dropdown Test on OrangeHRM', async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})