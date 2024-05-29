// src/pages/loginPage.ts
import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';


export class ProductsPage extends BasePage {
    readonly productsTitle: Locator;

    constructor(page: Page) {
        super(page);

        this.productsTitle = page.locator('.product_label');
    }



}
