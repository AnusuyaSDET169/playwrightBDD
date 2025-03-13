//import { Given, When, Then } from '@cucumber/cucumber';

//const { Given, When, Then } = test();
import { Given, When, Then } from 'playwright-bdd';  // Correct import
import { expect } from '@playwright/test';

  Given('I am on the login page {string}', async ({page}, url) => {
    await page.goto(url);

  });
  
  When('I enter valid credentials {string} and {string}', async ({page}, User, Password) => {
    await page.getByRole('textbox', { name: 'User' }).fill(User);
    await page.getByRole('textbox', { name: 'Password' }).fill(Password);
  });
  
  When('I click on the login button', async ({page}) => {
    await page.getByRole('button', { name: 'Login' }).click();

  });
  
  Then('I should be logged in successfully', async ({}) => {
    await page.waitForSelector('text=Welcome to LMS - Learning Management System');
    const text = await page.textContent('text=Welcome to LMS - Learning Management System');
    expect(text).toBe('Welcome to LMS - Learning Management System');
  });