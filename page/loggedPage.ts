import { expect, Locator, Page, test } from '@playwright/test'
export class LoggedPage {
    successMessage: Locator;
    logoutButton: Locator
    constructor(page: Page) {
        this.successMessage = page.getByText('You logged into a secure area')
        this.logoutButton = page.getByRole('link', { name: 'Logout' })
    }
    async verifySuccessMessageIsVisible(): Promise<void> {
        await expect(this.successMessage).toContainText('You logged into a secure area!')
    }
    async clickLogoutButton(): Promise<void> {
        await this.logoutButton.click()
    }
}
    