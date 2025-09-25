import { expect, test } from '@playwright/test'
import { HomePage } from '../page/homepage'
import { CheckBoxPage } from '../page/checkboxpage'

test('test of check box link', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.clickOnCheckboxes()
    let checkBoxPage = new CheckBoxPage(page)
    await checkBoxPage.validateCheckBoxes1()
    await checkBoxPage.validateCheckBoxes2()
    await checkBoxPage.clickOnCheckBox1()

}) 