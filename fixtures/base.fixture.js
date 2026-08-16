import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/test-data';

export const test= base.extend({
    loginPage: async ({page}, use) =>{
        const loginPage= new LoginPage(page);
        await use(loginPage);
    },

    authenticatedPage: async ({page}, use)=>{
        const loginPage= new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await use(page);
},
});

export {expect} from '@playwright/test';