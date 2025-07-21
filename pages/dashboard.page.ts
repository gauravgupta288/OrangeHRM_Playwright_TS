import { BasePage } from "./BasePage.page";
import { Page } from '@playwright/test';

export class DashboardPage extends BasePage {

    private dashboardCards = '.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget'; // Example selector, change as per your app
    private totalLoggedInHours = '.orangehrm-attendance-card-bar'

    constructor(page: Page) {
        super(page);
    }

    async getDashboardCardsCount(): Promise<number> {
        await this.page.waitForSelector(this.dashboardCards, { state: 'visible' });
        const cards = await this.page.$$(this.dashboardCards);

        return cards.length;
    }

    async waitForPageLoad(): Promise<string> {
        try {
            console.log('Waiting for dashboard page elements to be visible...');
            await this.page.waitForSelector(this.totalLoggedInHours, this.options);
            console.log('Dashboard page successfully loaded.');
            return 'Dashboard page loaded';
        } catch (error) {
            throw new Error(`Dashboard page did not load correctly: ${error}`);
        }
    }

    async clickOnQuickLaunch(menu: number) {

        await this.page.waitForSelector(this.totalLoggedInHours, { state: 'visible' });
        await this.page.waitForSelector('.oxd-icon-button.orangehrm-quick-launch-icon');
        const elements = await this.page.$$('.oxd-icon-button.orangehrm-quick-launch-icon');

        switch (menu) {
            case 1:
                await elements[0].click();
                break;
            case 2:
                await elements[1].click();
                break;
            case 3:
                await elements[2].click();
                break;
            case 4:
                await elements[3].click();
                break;
            case 5:
                await elements[4].click();
                break;
            case 6:
                await elements[5].click();
                break;
            default:
                throw new Error(`Invalid menu option: ${menu}`);

    }
}
}