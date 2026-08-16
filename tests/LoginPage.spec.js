import {test, expect} from '../fixtures/base.fixture';


test('login test successful', async ({loginPage, page})=>{
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(loginPage.homepageHeader).toBeVisible();
    await expect(page).toHaveURL(/inventory.html/);

});

test('Failed login scenario', async({loginPage})=>{
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauc');
    const errorMessage=  await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Epic sadface: Username and password do not match any user in this service");

});