// Page Object Model for the SauceDemo products (inventory) page
class ProductsPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.itemPrices = page.locator('.inventory_item_price');
  }

  async addProductToCartByName(name) {
    const item = this.page.locator('.inventory_item', { hasText: name });
    await item.locator('button', { hasText: 'Add to cart' }).click();
  }

  async sortBy(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async getCartCount() {
    if (await this.cartBadge.count() === 0) return 0;
    return parseInt(await this.cartBadge.textContent(), 10);
  }
}

module.exports = { ProductsPage };
