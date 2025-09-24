import { expect, Locator, Page, test } from '@playwright/test'
export class DropdownPage {
    selectOptionDropdown: Locator;
    constructor(page: Page) {
        this.selectOptionDropdown = page.locator('#dropdown')
    }
    async selectOptionFromDropdown(optionText: string): Promise<void> {
        await this.selectOptionDropdown.selectOption(optionText)
       
    }
    async verifyOptionIsSelected(option: string): Promise<void> {
        await expect(this.selectOptionDropdown).toHaveValue(option)
    }
}