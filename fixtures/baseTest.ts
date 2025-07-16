// fixtures/baseTest.ts
import { test as baseTest, BrowserContext, Page } from '@playwright/test';

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

    // ✅ Login once
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.fill('[name=username]', 'Admin');
    await page.fill('[name=password]', 'admin123');
    await page.click('[type=submit]');
    await page.waitForURL('**/dashboard');

    await use(page);
    await page.close();
  },
});

export const expect = test.expect;
