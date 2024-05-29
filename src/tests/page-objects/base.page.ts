// src/pages/base.page.ts
import { Page } from 'playwright';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }
}
