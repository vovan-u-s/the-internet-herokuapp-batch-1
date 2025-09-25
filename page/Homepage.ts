import { expect, Locator, Page, test } from '@playwright/test'
export class HomePage {
    forgotPasswordLink: Locator
    title: Locator;
    dropdown: Locator;
    constructor(page: Page) {
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' })
        this.title = page.getByRole('heading', { name: 'Welcome to the-internet' })
        this.dropdown = page.getByRole('link', { name: 'Dropdown' })
    }
    async testingOfForgotPassword(): Promise<void> {
        await this.forgotPasswordLink.click()
    }
    async clickOnDropdown(): Promise<void> {
        await this.dropdown.click();
    }
}