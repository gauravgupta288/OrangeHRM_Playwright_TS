import { Page } from '@playwright/test';
import { BasePage } from './BasePage.page';

export class LoginPage extends BasePage {
  
  // Selectors
  private usernameInput = '[name=username]';   // Change selectors as per your app
  private passwordInput = '[name=password]';
  private loginButton = '[type=submit]';
  private errorMessage = '.error-msg';

  constructor(page: Page) {
    super(page);
  }

  async waitForPageLoad(): Promise<string> {
    await this.page.waitForSelector(this.usernameInput, { state: 'visible' });
    await this.page.waitForSelector(this.passwordInput, { state: 'visible' });
    await this.page.waitForSelector(this.loginButton, { state: 'visible' });
    return 'Login page loaded';
  }

  async navigate(url: string) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    await this.page.waitForSelector(this.errorMessage, { state: 'visible', timeout: 3000 }).catch(() => {});
    return await this.page.textContent(this.errorMessage);
  }
}
