import { expect, test } from '@playwright/test'
import { HomePage } from '../page/homepage'
import { DropdownPage } from '../page/DropdownPage'
test('test of homepage, async', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.testingOfTheTitle('Welcome to the-internet')
})
test('go to dropdown page, sync', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.clickOnDropdown()
    let mydropdownPage = new DropdownPage(page)
    await mydropdownPage.selectOptionFromDropdown('Option 1')
    await mydropdownPage.verifyOptionIsSelected('Option 1')
})