import { expect, Locator, Page, test } from '@playwright/test'
export class FormAuthenticationPage {
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    logOutMessage: Locator;
    invailidPasswordMessage: Locator;
    invalidUsernameMessage: Locator;
    constructor(page: Page) {
        this.usernameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: ' Login' })
        this.logOutMessage = page.getByText('You logged out of the secure')
        this.invailidPasswordMessage = page.getByText('Your password is invalid! ×')
        this.invalidUsernameMessage = page.getByText('Your username is invalid! ×')
    }
    async enterUsernameAndPasswordAndPressLogin(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async verifyLogoutMessageIsVisible(): Promise<void> {
        await expect(this.logOutMessage).toContainText('You logged out of the secure area!')
    }
    async verifyInvalidPasswordMessageIsVisible(): Promise<void> {
        await expect(this.invailidPasswordMessage).toContainText('Your password is invalid!')
    }
    async verifyInvalidUsernameMessageIsVisible(): Promise<void> {
        await expect(this.invalidUsernameMessage).toContainText('Your username is invalid!')
    }
}