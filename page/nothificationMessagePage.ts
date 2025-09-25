import{test,Page,Locator}from'@playwright/test'
export class NotificationMessagePage {
    mainTitleMessage: Locator;
    constructor(page: Page) {
        this.mainTitleMessage = page.getByText('Action unsuccesful, please')
    }
    async verifyMainTitleMessage(message: string): Promise<void> {
        await test.expect(this.mainTitleMessage).toHaveText(message);
    }
}