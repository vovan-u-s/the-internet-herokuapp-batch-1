import { test, expect } from '@playwright/test';

test('basic test example', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/The Internet/);
});

test('check page heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});