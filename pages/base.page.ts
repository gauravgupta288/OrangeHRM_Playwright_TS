import { test as base, Browser, BrowserContext, Page } from '@playwright/test';
import { getUrl } from '../utils/getUrl';

// Extend Playwright's test to add our own fixtures
type TestFixtures = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
  baseUrl: string;
};

// Extend base test with fixtures
const test = base.extend<TestFixtures>({
  browser: async ({ browser }, use) => {
    // use Playwright's default browser
    await use(browser);
  },

  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },

  baseUrl: async ({}, use) => {
    const env = process.env.TEST_ENV || 'qa';
    const url = getUrl(env);
    await use(url);
  },
});

export { test };
export const expect = test.expect;
