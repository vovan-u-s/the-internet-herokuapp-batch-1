import { expect, Locator, Page, test } from '@playwright/test'
export class CheckBoxPage {
    firstCheckbox: Locator;
    secondCheckbox: Locator;
    constructor(page: Page) {
        this.firstCheckbox = page.getByRole('checkbox').first()
        this.secondCheckbox = page.getByRole('checkbox').nth(1)
    }
    async validateFirstCheckboxIsUnchecked(): Promise<void> {
        await expect(this.firstCheckbox).not.toBeChecked()
    }
    async validateSecondCheckboxIsChecked(): Promise<void> {
        await expect(this.secondCheckbox).toBeChecked()
    }
    async clickFirstCheckbox(): Promise<void> {
        await this.firstCheckbox.click()
    }
    async validateFirstCheckboxIsChecked(): Promise<void> {
        await expect(this.firstCheckbox).toBeChecked()
    }
}