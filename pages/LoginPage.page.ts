import { Page } from '@playwright/test';
import { BasePage } from './BasePage.page';

export class LoginPage extends BasePage{

  // Selectors
  private usernameInput = '#username';   // Change selectors as per your app
  private passwordInput = '#password';
  private loginButton = '#loginBtn';
  private errorMessage = '.error-msg';

  constructor(page: Page) {
    super(page);
  }

  async navigate(url: string) {
    await this.page.goto(url);
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
    return await this.page.textContent(this.errorMessage);
  }
}
