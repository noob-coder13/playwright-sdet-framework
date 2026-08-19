import {test as setup} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../utils/test-data';

const authFile= 'auth/standard-user.json';

setup('authenticate as standard user', async ({page})=>{
    const loginPage= new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await page.waitForURL(/inventory.html/);
    await page.context().storageState({path: authFile});
});