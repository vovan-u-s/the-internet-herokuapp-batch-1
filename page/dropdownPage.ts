import{expect, Locator, Page, test} from '@playwright/test'
export class DropdownPage {
    selectOptionDropdown:Locator;
    constructor(page:Page){
        this.selectOptionDropdown=page.locator('#dropdown')
    }
    async selectOptionFromDropdown(option:string):Promise<void>{
        await this.selectOptionDropdown.selectOption(option)
        await expect(this.selectOptionDropdown).toHaveValue(option) 
}
}