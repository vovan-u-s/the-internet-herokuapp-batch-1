import { expect, test } from '@playwright/test'
import { HomePage } from '../page/Homepage'
import { DropdownPage } from '../page/dropdownPage'
test('test of homepage, async', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.testingOfTheTitle('Welcome to the-internet')

})
test('go to dropdown page, sync', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.clickOnDropdown()

})
test('select option ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let mydropdownPage = new DropdownPage(page)
    await mydropdownPage.selectOptionFromDropdown('Option 1')
})