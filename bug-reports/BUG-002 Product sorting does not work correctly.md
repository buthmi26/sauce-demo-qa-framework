# BUG-002: Product sorting does not work correctly

**Reported by:** Buthmi Sedara
**Date:** 8/13/2026
**Environment:** SauceDemo (https://www.saucedemo.com/), Chrome, desktop
**Severity:** Medium
**Priority:** Medium
**Status:** Open

## Summary

When logged in as `problem_user`, the product sorting functionality does not correctly arrange products according to the selected sorting option.

## Steps to Reproduce

1. Go to https://www.saucedemo.com/
2. Log in with username `problem_user` and password `secret_sauce`
3. Navigate to the Products listing page
4. Open the product sorting dropdown
5. Select **Name (A to Z)**
6. Observe the order of the products

## Expected Result

The products should be displayed in alphabetical order from A to Z according to their product names.

## Actual Result

The products are not displayed in the expected alphabetical order after selecting the **Name (A to Z)** sorting option.

## Screenshots
![BUG-002 - Product sorting issue](../screenshots/BUG002.png)

## Notes

This defect affects the product browsing and sorting functionality and may make it difficult for users to locate products efficiently. This bug was identified while testing the SauceDemo application using the `problem_user` account.
