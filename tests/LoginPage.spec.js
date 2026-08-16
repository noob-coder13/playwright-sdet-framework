import {test, expect} from '../fixtures/base.fixture';
import { users } from '../utils/test-data';


// test('login test successful', async ({loginPage, page})=>{
    
//     await loginPage.goto();
//     await loginPage.login('standard_user', 'secret_sauce');
//     await expect(loginPage.homepageHeader).toBeVisible();
//     await expect(page).toHaveURL(/inventory.html/);

// });

// test('Failed login scenario', async({loginPage})=>{
//     await loginPage.goto();
//     await loginPage.login('standard_user', 'secret_sauc');
//     const errorMessage=  await loginPage.getErrorMessage();
//     expect(errorMessage).toContain("Epic sadface: Username and password do not match any user in this service");

// });

test.only('login with test data', async ({loginPage, page})=>{
    const login= Object.keys(users);
    for(const value of login){
        await loginPage.goto();
        await loginPage.login(users[value].username, users[value].password);
        if(users[value].shouldSucceed){
            await expect(page).toHaveURL(/inventory.html/);}
        else{
            await expect(await loginPage.getErrorMessage()).toContain(users[value].errorMessage);}
        
}});