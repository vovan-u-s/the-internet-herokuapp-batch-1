import { expect, test } from '@playwright/test'
import { HomePage } from '../page/Homepage'

test('test of homepage, async', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.testingOfTheTitle('Welcome to the-internet')
})