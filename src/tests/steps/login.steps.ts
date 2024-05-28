import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

let browser: Browser;
let page: Page

Given('I visit the Sauce Demo website login page', async function() {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/v1/")
})

When('I enter valid login credentials', async function() {
    // await loginPage.submitLoginForm()
})

Then('I should see the home page', async function() {
    // await loginPage.assertUserIsLoggedIn()
})

Then('I should see an error message', async function() {
    // await loginPage.assertUserIsLoggedIn()
})

When(/^I enter "([^"]*)" and "([^"]*)"$/, async function() {
    // await loginPage.submitLoginForm()
})