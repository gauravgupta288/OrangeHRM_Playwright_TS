import { describe } from 'node:test';
import { test, expect } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage.page';
import { DashboardPage } from '../pages/dashboard.page';

describe('Dashboards Tests', () => {
    test('Vadlidate dashboard grid', async ({ page }) => {

        const dashboard = new DashboardPage(page);
        const header = await dashboard.getHeaderText();

        expect(header).toContain('Dashboard');

        const cards = await dashboard.getDashboardCardsCount();

        expect(cards).toBeGreaterThanOrEqual(7);

    })
    
})