const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');
const { CheckoutPage } = require('./pages/CheckoutPage');

test.describe('Cart & Checkout', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC011 - add single item to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    expect(await productsPage.getCartCount()).toBe(1);
  });

  test('TC012 - add multiple items to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.addProductToCartByName('Sauce Labs Bike Light');
    await productsPage.addProductToCartByName('Sauce Labs Bolt T-Shirt');
    expect(await productsPage.getCartCount()).toBe(3);
  });

  test('TC015 - complete checkout with valid info', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.goToCart();
    await checkoutPage.startCheckout();
    await checkoutPage.fillInfo('Test', 'User', '10100');
    await checkoutPage.finishOrder();

    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('TC016 - checkout fails with missing first name', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.addProductToCartByName('Sauce Labs Backpack');
    await productsPage.goToCart();
    await checkoutPage.startCheckout();
    await checkoutPage.fillInfo('', 'User', '10100');

    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('First Name is required');
  });
});
