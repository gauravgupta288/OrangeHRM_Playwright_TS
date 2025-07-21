import { describe } from 'node:test';
import { test, expect } from '../fixtures/baseTest';
import { LeavePage } from '../pages/Leaves.page';
import { DashboardPage } from '../pages/dashboard.page';

describe('Dashboards Tests', () => {
    test('Vadlidate dashboard grid', async ({ page }) => {

        const dashboard = new DashboardPage(page);
        const header = await dashboard.getHeaderText();

        expect(header).toContain('Dashboard');

        const cards = await dashboard.getDashboardCardsCount();

        expect(cards).toBeGreaterThanOrEqual(7);

    })
    
     test.only('Assign Leave', async ({ page }) => {

        const dashboard = new DashboardPage(page);
        await dashboard.clickOnQuickLaunch(1);
        const leavesPage = new LeavePage(page);

        await leavesPage.waitForPageLoad();
        const header = await leavesPage.getHeaderText();
        expect(header).toContain('Leave');

        const message = await leavesPage.assignLeave();

    })
})