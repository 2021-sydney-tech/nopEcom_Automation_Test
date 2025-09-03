const {test, expect} = require('@playwright/test');

test("Handle Dropdowns", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.locator("#country").selectOption({label : "Australia"}); // value & index can be changed by developer
    await page.waitForTimeout(5000);
    

    // Option 1: To check total number of dropdowns
    // const countryOptions = page.locator("#country option");
    // await expect(countryOptions).toHaveCount(10);

    // Option 2: To get all dropdown options using Array .$$
    const options = await page.$$("#country option");
    console.log("Number of country options: " + options.length);
    expect(options.length).toBe(10);


    // Handle multi selected dropdown
    const colors = page.locator("#colors option");
    await expect(colors).toHaveCount(7);
    await page.selectOption("#colors", ['Blue', 'Red', 'Green']);

    // Presence of the value
    const valueColor = await page.locator('#colors').textContent();
    expect(valueColor.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);

})