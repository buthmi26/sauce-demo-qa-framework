# Test Plan — SauceDemo Login, Cart & Checkout

## 1. Objective
Verify that a user can log in, browse products, add items to the cart, and complete checkout without functional errors, and identify any defects in these flows.

## 2. Scope

**In scope:**
- Login (valid/invalid credentials, locked-out user)
- Product listing and sorting
- Add/remove items from cart
- Checkout flow (customer info, order summary, order completion)

**Out of scope:**
- Payment gateway integration (SauceDemo does not process real payments)
- Performance/load testing
- Cross-browser/device testing (not covered in this cycle)

## 3. Test Approach
- Manual exploratory and scripted testing for initial coverage
- Automated regression tests (Playwright) for core happy-path and key negative flows
- Equivalence partitioning and boundary value analysis used to design login and cart quantity test cases

## 4. Environment
- URL: https://www.saucedemo.com/
- Browser: Chrome (latest)
- Test accounts provided by SauceDemo: `standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`
- Password for all accounts: `secret_sauce`

## 5. Entry Criteria
- Application is accessible and login page loads correctly
- Test accounts are available and active

## 6. Exit Criteria
- All planned test cases executed
- All critical/high severity bugs logged and triaged
- No blocker-severity defects remain open

## 7. Test Deliverables
- Test cases (`test-cases.csv`)
- Bug reports (`bug-reports/`)
- Automated test scripts (`tests/`)
- Test summary report (this document, updated post-execution)

## 8. Risks
- SauceDemo is a third-party demo site; availability/behavior could change without notice
- `problem_user` and `performance_glitch_user` accounts have intentionally broken behavior, used here specifically to demonstrate bug-finding
