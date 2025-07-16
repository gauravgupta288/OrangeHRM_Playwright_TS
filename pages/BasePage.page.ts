import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  // Common selectors (example)
  protected header = 'header';
  protected footer = 'footer';
  protected logoutButton = '#logout';

  constructor(page: Page) {
    this.page = page;
  }

  async clickLogout() {
    await this.page.click(this.logoutButton);
  }

  async getHeaderText() {
    return this.page.textContent(this.header);
  }

  // Add more shared methods here
}
