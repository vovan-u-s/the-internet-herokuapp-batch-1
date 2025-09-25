import { expect, Locator, Page, test } from '@playwright/test'
export class CheckBoxPage {
    checkBox1: Locator;
    checkBox2: Locator;
    constructor(page: Page) {
        this.checkBox1 = page.getByRole('checkbox').first()
        this.checkBox2 = page.getByRole('checkbox').nth(1)
    }
    async validateCheckBoxes1(): Promise<void> {
        await expect(this.checkBox1).toBeChecked()
    }
    async validateCheckBoxes2(): Promise<void> {
        await expect(this.checkBox2).toBeChecked()
    }
    async clickOnCheckBox1(): Promise<void> {
        await this.checkBox1.click()
        await this.validateCheckBoxes1()
    }
}