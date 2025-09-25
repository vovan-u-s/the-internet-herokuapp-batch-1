import { expect, test } from '@playwright/test'
import { HomePage } from '../page/homepage'
import { DropdownPage } from '../page/dropdownPage'
test('test of homepage, async', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.testingOfTheTitle()
})
test('go to dropdown page, sync', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.clickOnDropdown()
    let mydropdownPage = new DropdownPage(page)
    await mydropdownPage.selectOptionFromDropdown('Option 1')
    await mydropdownPage.verifyOptionIsSelected("1")
})
test('select option 2 from dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.clickOnDropdown()
    let mydropdownPage = new DropdownPage(page)
    await mydropdownPage.selectOptionFromDropdown('Option 2')
    await mydropdownPage.verifyOptionIsSelected("2")
})