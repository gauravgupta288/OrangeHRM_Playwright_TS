import { Page } from '@playwright/test';

export abstract class BasePage {

  abstract waitForPageLoad(): Promise<string>;
  protected page: Page;

  // Common selectors (example)
  protected headerTitle = '.oxd-topbar-header-breadcrumb-module'
  protected footer = 'footer';
  protected logoutButton = '#logout';

  constructor(page: Page) {
    this.page = page;
  }

  async clickLogout() {
    await this.page.click(this.logoutButton);
  }

  async getHeaderText() {
    return this.page.textContent(this.headerTitle);
  }

  // Add more shared methods here
}
