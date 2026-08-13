const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');

test.describe('Product Sorting', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC008 - sort products by price low to high', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('lohi');

    const prices = await productsPage.itemPrices.allTextContents();
    const numericPrices = prices.map((p) => parseFloat(p.replace('$', '')));
    const sorted = [...numericPrices].sort((a, b) => a - b);

    expect(numericPrices).toEqual(sorted);
  });

  test('TC009 - sort products by price high to low', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('hilo');

    const prices = await productsPage.itemPrices.allTextContents();
    const numericPrices = prices.map((p) => parseFloat(p.replace('$', '')));
    const sorted = [...numericPrices].sort((a, b) => b - a);

    expect(numericPrices).toEqual(sorted);
  });
});
