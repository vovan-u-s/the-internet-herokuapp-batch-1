import { expect, test, Page } from '@playwright/test'
import { HomePage } from '../page/homepage'
import { LoggedPage } from '../page/loggedpage'
import { FormAuthenticationPage } from '../page/formAuthentication'


test('test of check form authentication', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let homePage = new HomePage(page)
    await homePage.clickOnFormAuthentication()
    let formAuthenticationPage = new FormAuthenticationPage(page)
    await formAuthenticationPage.enterUsernameAndPasswordAndPressLogin('tomsmith', 'SuperSecretPassword!')
    let loggedPage = new LoggedPage(page)
    await loggedPage.verifySuccessMessageIsVisible()
    await loggedPage.clickLogoutButton()
    await formAuthenticationPage.verifyLogoutMessageIsVisible()


})
