import { expect, Locator, Page, test } from '@playwright/test'
export class HomePage {
    title: Locator;
    dropdown:Locator;
    checkBoxes:Locator;
    constructor(page: Page) {
        this.title = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.dropdown=page.getByRole('link', { name: 'Dropdown' })
        this.checkBoxes = page.getByRole('link', { name: 'Checkboxes' })
    }
    async testingOfTheTitle(myTitle: string): Promise<void> {
        await expect(this.title).toHaveText('Welcome to the-internet');
    }
    async clickOnDropdown(): Promise<void> {
        await this.dropdown.click();
    }
    async clickOnCheckboxes(): Promise<void> {
        await this.checkBoxes.click();
    }
}