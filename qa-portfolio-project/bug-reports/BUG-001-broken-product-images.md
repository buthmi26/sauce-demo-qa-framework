# BUG-001: Product images broken for problem_user

**Reported by:** Buthmi Sedara
**Date:** 8/13/2026
**Environment:** SauceDemo (https://www.saucedemo.com/), Chrome, desktop
**Severity:** Medium
**Priority:** Medium
**Status:** Open

## Summary
When logged in as `problem_user`, product images on the products listing page do not load correctly — all products display the same incorrect image.

## Steps to Reproduce
1. Go to https://www.saucedemo.com/
2. Log in with username `problem_user` and password `secret_sauce`
3. Observe the product listing page

## Expected Result
Each product should display its own correct, distinct image.

## Actual Result
All products display an identical placeholder/incorrect image (a picture of a dog), unrelated to the actual product.

## Screenshots
![BUG-002 - Product sorting issue](../screenshots/BUG001.png)

## Notes
This appears to be an intentionally seeded bug in the SauceDemo demo environment used to simulate a real-world image-loading defect, useful here for demonstrating bug identification and reporting.
