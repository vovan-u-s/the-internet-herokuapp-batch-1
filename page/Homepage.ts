import { expect, Locator, Page, test } from '@playwright/test'
export class HomePage {
    title: Locator;
    constructor(page: Page) {
        this.title = page.getByRole('heading', { name: 'Welcome to the-internet' })
    }
    async testingOfTheTitle(myTitle: string): Promise<void> {
        await expect(this.title).toHaveText('Welcome to the-internet');
    }
}