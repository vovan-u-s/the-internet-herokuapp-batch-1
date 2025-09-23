import{Locator, Page, test} from '@playwright/test'
export class DropdownPage {
    selectOption:Locator;
    constructor(page:Page){
        this.selectOption=page.locator('#dropdown')
    }
    async selectOptionFromDropdown(option:string):Promise<void>{
        await this.selectOption.selectOption(option)
}
}
