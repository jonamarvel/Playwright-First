import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=salesforce.login&oq=salesforce.login&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU2MDNqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Login | Salesforce Salesforce' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('jonamarvel@testleaf.com');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Testleaf123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://testleaf-c-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByPlaceholder('Search apps and items...').fill('sales');
  await page.getByRole('option', { name: 'Sales', exact: true }).click();
  await page.getByRole('link', { name: 'Opportunities' }).click();
  await page.getByRole('row', { name: 'Select item 1 Playwright' }).getByRole('link').click();

});