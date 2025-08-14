import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  // ✅ Reporter should be at the top level
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  }
});
