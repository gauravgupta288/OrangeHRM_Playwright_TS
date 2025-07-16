import {test, expect} from '../fixtures/baseTest';

test('Login to app with valid credentials', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');


})