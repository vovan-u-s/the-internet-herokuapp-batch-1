import { test, Page } from '@playwright/test'
import { ErrorPage } from '../page/errorPage'
import { ForgotPasswordPage } from '../page/forgotPasswordPage'
import { HomePage } from '../page/homepage'
import { NotificationMessagePage } from '../page/nothificationMessagePage'
test('forgot password test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let newHomePage = new HomePage(page)
    await newHomePage.testingOfForgotPassword()
    let newForgotPasswordPage = new ForgotPasswordPage(page)
    await newForgotPasswordPage.forgotPassword()
    let errorPage = new ErrorPage(page)
    await errorPage.verifyErrorMessage('Internal Server Error')
})
test.only('check notification message', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    let newHomePage = new HomePage(page)
    await newHomePage.testingOfNotificationMessage()
    let notificationMessagePage = new NotificationMessagePage(page)
    await notificationMessagePage.verifyMainTitleMessage(' Action unsuccesful, please try again')
})