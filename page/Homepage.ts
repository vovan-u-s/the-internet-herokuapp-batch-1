import { expect, Locator, Page, test } from '@playwright/test'
export class HomePage {
    forgotPasswordLink: Locator
    constructor(page: Page) {
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' })
    }
    async testingOfTheTitle() : Promise<void> {
        await this.forgotPasswordLink.click()
    }
}