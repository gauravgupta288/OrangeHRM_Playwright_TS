import { BasePage } from "./BasePage.page";
import { expect, Page } from '@playwright/test';

export class LeavePage extends BasePage {

  private dashboardCards = '.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget'; // Example selector, change as per your app
  private employeeNameInput = '.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active input';
  private leaveType = '.oxd-select-text.oxd-select-text--active';
  private dateInput = '.oxd-date-input'

  constructor(page: Page) {
    super(page);
  }

  async assignLeave(): Promise<String> {
    
    try { 
      await this.page.getByRole('textbox', { name: 'Type for hints...' }).click();
      await this.page.getByRole('textbox', { name: 'Type for hints...' }).click();
      await this.page.getByRole('textbox', { name: 'Type for hints...' }).fill('John');
      await this.page.getByRole('option', { name: 'John K Doe' }).first().click();
      await this.page.getByText('-- Select --').click();
      await this.page.getByText('CAN - Bereavement').click();
      await this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
      await this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().fill('2025-july-9');
      await this.page.locator('div').filter({ hasText: /^Comments$/ }).nth(1).click();
      await this.page.locator('form i').nth(2).click();
      await this.page.getByText('9', { exact: true }).click();
      await this.page.locator('form i').nth(3).click();
      await this.page.getByText('10').click();
      await this.page.getByRole('button', { name: 'Assign' }).click();
      await this.page.getByRole('button', { name: 'Ok' }).click();
    } catch (error) {
      throw new Error(`Error getting dashboard cards count: ${error}`);
    }

    return 'Leave assigned successfully';
  }

  async waitForPageLoad(): Promise<string> {
    try {
      console.log('Waiting for Leave page elements to be visible...');
      await this.page.waitForSelector(this.employeeNameInput, this.options);
      console.log('Leave page successfully loaded.');
      return 'Leave page loaded';
    } catch (error) {
      throw new Error(`Leave page did not load correctly: ${error}`);
    }
  }
}