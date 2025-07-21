import { describe } from 'node:test';
import { test, expect } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage.page';

describe.skip('Login Tests', () => {
    test('Login to app with valid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const header = await loginPage.getHeaderText();

        expect(header).toContain('Dashboard');

    })

})