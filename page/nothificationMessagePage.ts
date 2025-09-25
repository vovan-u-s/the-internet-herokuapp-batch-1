import{test,Page,Locator, expect}from'@playwright/test'
export class NotificationMessagePage {
    mainTitleMessage: Locator;
    constructor(page: Page) {
        this.mainTitleMessage = page.getByText('Action unsuccesful, please')
    }
    async verifyMainTitleMessage(message: string): Promise<void> {
        let notificationMessage = await this.mainTitleMessage.innerText()
        expect(notificationMessage).toContain(message)
    }
}