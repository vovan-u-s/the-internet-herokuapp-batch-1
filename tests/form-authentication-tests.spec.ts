import { expect, test, Page } from '@playwright/test'
import { HomePage } from '../page/homepage'
import { LoggedPage } from '../page/loggedpage'
import { FormAuthenticationPage } from '../page/formAuthentication'
let homePage: HomePage
let formAuthenticationPage: FormAuthenticationPage
let loggedPage: LoggedPage
test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    formAuthenticationPage = new FormAuthenticationPage(page)
    loggedPage = new LoggedPage(page)
    await page.goto('https://the-internet.herokuapp.com/')

})

test('test of check form authentication', async ({ page }) => {
    await homePage.clickOnFormAuthentication()
    await formAuthenticationPage.enterUsernameAndPasswordAndPressLogin('tomsmith', 'SuperSecretPassword!')
    await loggedPage.verifySuccessMessageIsVisible()
    await loggedPage.clickLogoutButton()
    await formAuthenticationPage.verifyLogoutMessageIsVisible()
})
test('negative login test', async ({ page }) => {
    await homePage.clickOnFormAuthentication()
    await formAuthenticationPage.enterUsernameAndPasswordAndPressLogin('dfhdfhdfhd', 'SuperSecretPassword!')
    await formAuthenticationPage.verifyInvalidUsernameMessageIsVisible()
})
test('negative password test', async ({ page }) => {
    await homePage.clickOnFormAuthentication()
    await formAuthenticationPage.enterUsernameAndPasswordAndPressLogin('tomsmith', 'fgdfgdfgd')
    await formAuthenticationPage.verifyInvalidPasswordMessageIsVisible()

})
