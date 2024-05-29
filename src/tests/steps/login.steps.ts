import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { ProductsPage } from '../page-objects/products.page';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let productsPage: ProductsPage;

Given('I visit the Sauce Demo website login page', async function() {
    console.log("HELLO WORLD!!!");
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigateTo("https://www.saucedemo.com/v1/");
})

When('I enter valid login credentials', async function() {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
})

When('submit the login form', async function() {
    await loginPage.clickLoginButton();
})

Then('I should see the home page', async function() {
    expect(await page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
    expect(await productsPage.productsTitle).toBeVisible();
})

Then('I should see an error message', async function() {

})

When(/^I enter "([^"]*)" and "([^"]*)"$/, async function() {

})