import{expect, Locator,Page}from'@playwright/test'
export class ErrorPage {
    errorMessage: Locator;
    constructor(page: Page) {
        this.errorMessage = page.getByRole('heading', { name: 'Internal Server Error' })
    }
    async verifyErrorMessage(message: string): Promise<void> {
        await expect(this.errorMessage).toHaveText(message);
    }
}