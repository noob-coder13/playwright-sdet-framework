import {test, expect} from '../../fixtures/base.fixture';

test('inventory loads for authenticated user', async ({authenticatedPage})=>{
    await expect(authenticatedPage).toHaveURL(/inventory.html/);
    await expect(authenticatedPage.getByTestId("primary-header")).toBeVisible();
});