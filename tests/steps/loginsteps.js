
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

  
  Given('I am on home page', async ({page}) => {
    await page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login");

  });
  
  When('I click link {string}', async ({page},name ) => {
    await page.getByRole('textbox', { name: 'User' }).fill('Playwright@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('March@2025');
    await page.getByRole('button', { name: 'Login' }).click();
  });
  
  Then('I see in title {string}', async ({page}, arg) => {
    await page.waitForSelector('text=Welcome to LMS - Learning Management System');
    const text = await page.textContent('text=Welcome to LMS - Learning Management System');
    expect(text).toBe('Welcome to LMS - Learning Management System');
  });