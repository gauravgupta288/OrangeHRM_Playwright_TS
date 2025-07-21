import { BasePage } from "./BasePage.page";
import { Page } from '@playwright/test';

export class LeavePage extends BasePage {
    
    private dashboardCards = '.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget'; // Example selector, change as per your app
    private employeeNameInput = '.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active input';
    private leaveType = '.oxd-select-text.oxd-select-text--active';
    private dateInput = '.oxd-date-input'

    constructor(page: Page) {
        super(page);
    }

    async assignLeave(): Promise<String> {
        try{
            await this.page.fill(this.employeeNameInput, 'John Doe');
            await this.page.selectOption(this.employeeNameInput, 'CAN - FMLA');
            const ele = this.page.$$(this.dateInput)

            const todaysDate = new Date();
            const formattedDate = todaysDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
            
            await this.page.fill(ele[0], formattedDate);
            await this.page.fill(ele[2], '2023-10-01');
        }catch (error) {
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