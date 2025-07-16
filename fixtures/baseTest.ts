// fixtures/baseTest.ts
import { test as baseTest, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.page';
import * as utils from '../utils/getUrl';

type MyFixtures = {
  page: Page;
  context: BrowserContext;
};

export const test = baseTest.extend<MyFixtures>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();

    const env = process.env.ENV || 'prod'; // Default to 'dev' if ENV is not set
    await page.goto(utils.getUrl(env));
    // ✅ Login once
    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');

    await use(page);
    await page.close();
  },
});

export const expect = test.expect;
