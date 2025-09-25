import { Locator, Page, test } from '@playwright/test'
export class ForgotPasswordPage {
    emailInputBar: Locator;
    retrievePassword: Locator;
    constructor(page: Page) {
        this.emailInputBar = page.getByRole('textbox', { name: 'E-mail' })
        this.retrievePassword = page.getByRole('button', { name: 'Retrieve password' })
    }
    async forgotPassword(email: string): Promise<void> {
        await this.emailInputBar.fill(email)
        await this.retrievePassword.click()
    }
}