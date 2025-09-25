import { test, Page } from '@playwright/test'
import { ErrorPage } from '../page/errorPage'
import { ForgotPasswordPage } from '../page/forgotPasswordPage'
import { HomePage } from '../page/homepage'
test('forgot password test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let newHomePage = new HomePage(page)
    await newHomePage.testingOfForgotPassword()
    let newForgotPasswordPage = new ForgotPasswordPage(page)
    await newForgotPasswordPage.forgotPassword()
    let errorPage = new ErrorPage(page)
    await errorPage.verifyErrorMessage('Internal Server Error')
})