# SauceDemo QA Framework

End-to-end QA portfolio project for SauceDemo that combines:
- Manual testing assets (test plan, test cases, bug reports)
- UI automation with Playwright (JavaScript + Page Object Model)
- API testing with Postman (ReqRes demo API)
- SQL-based data validation examples (SQLite)
- Accessibility findings from Lighthouse-based audits

Target application: https://www.saucedemo.com/

## Project Scope

This repository covers the following functional areas:
- Login scenarios (positive and negative)
- Product listing and sorting validation
- Cart operations
- Checkout flow validation
- Defect reporting using seeded demo-account issues

## Repository Structure

```text
.
|-- .github/workflows/tests.yml
|-- Accessibility/
|   |-- accessibility-findings.md
|   `-- accessibility.png
|-- bug-reports/
|   |-- BUG-001-broken-product-images.md
|   |-- BUG-002 Product sorting does not work correctly.md
|   `-- screenshots/
|-- postman/
|   `-- api-collection.json
|-- sql/
|   `-- validation-queries.sql
|-- tests/
|   |-- cart-checkout.spec.js
|   |-- login.spec.js
|   |-- sort.spec.js
|   `-- pages/
|       |-- CheckoutPage.js
|       |-- LoginPage.js
|       `-- ProductsPage.js
|-- test-cases.csv
|-- test-plan.md
|-- package.json
|-- playwright.config.js
|-- playwright-report/      (generated test report)
`-- test-results/           (generated test artifacts)
```

## Key Deliverables

| Path | Description |
|---|---|
| `test-plan.md` | Test objectives, scope, approach, environment, entry/exit criteria, and risks |
| `test-cases.csv` | 20 manual test cases across login, products, cart, checkout, and exploratory coverage |
| `tests/` | Automated Playwright regression tests using Page Object Model |
| `bug-reports/` | Documented defects with reproduction steps, expected/actual behavior, and screenshots |
| `Accessibility/accessibility-findings.md` | Accessibility audit findings and WCAG references |
| `postman/api-collection.json` | API tests for GET/POST success and negative scenarios (ReqRes) |
| `sql/validation-queries.sql` | SQL schema, seed data, and validation queries for QA data checks |
| `.github/workflows/tests.yml` | GitHub Actions CI workflow for automated Playwright execution |

## Automation Coverage

Implemented Playwright specs:
- `tests/login.spec.js`
	- TC001 successful login
	- TC002 invalid password
	- TC006 locked-out user
	- TC004 empty username
- `tests/sort.spec.js`
	- TC008 price sort low-to-high
	- TC009 price sort high-to-low
- `tests/cart-checkout.spec.js`
	- TC011 add one item
	- TC012 add multiple items
	- TC015 successful checkout
	- TC016 checkout validation (missing first name)

Page Object Model classes:
- `tests/pages/LoginPage.js`
- `tests/pages/ProductsPage.js`
- `tests/pages/CheckoutPage.js`

## Technology Stack

- Node.js
- Playwright (`@playwright/test`)
- JavaScript (CommonJS)
- Postman
- SQLite-compatible SQL
- GitHub Actions
- Lighthouse

## Setup and Test Execution

Prerequisites:
- Node.js 18+ (Node 20 is used in CI)
- npm

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all automated tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open the latest HTML report:

```bash
npm run report
```

## Playwright Configuration

Current configuration in `playwright.config.js`:
- `testDir`: `./tests`
- `fullyParallel`: `true`
- `retries`: `1`
- `reporter`: `html`
- `baseURL`: `https://www.saucedemo.com`
- `trace`: `on-first-retry`
- `screenshot`: `only-on-failure`
- Project: `chromium` (Desktop Chrome)

## CI Pipeline

Workflow: `.github/workflows/tests.yml`

Triggers:
- Push to `main`
- Pull request targeting `main`

Job actions:
1. Checkout repository
2. Setup Node.js 20
3. Install dependencies
4. Install Playwright browsers and OS dependencies
5. Run Playwright tests
6. Upload `playwright-report/` as an artifact (retained for 14 days)

## API Testing

Postman collection includes:
- GET users list
- GET single user (valid)
- GET single user (not found)
- POST create user
- POST register with missing password (negative)

Each request includes status code and response-body assertions.

## SQL Validation

`sql/validation-queries.sql` demonstrates:
- Schema creation for users, products, orders, and order_items
- Seed data inserts
- QA-style validation queries:
	- Order count verification
	- Order total reconciliation
	- Orphaned record detection
	- Multi-table joins for user-order-product checks
	- Revenue calculation

Example run:

```bash
sqlite3 qa_practice.db < sql/validation-queries.sql
```

## Accessibility Testing

See `Accessibility/accessibility-findings.md` for:
- Lighthouse accessibility score and screenshot evidence
- Identified issues mapped to WCAG references
- Practical remediation recommendations
- Notes about limits of automated accessibility tools

## Notes on SauceDemo Test Accounts

Common SauceDemo accounts used in this project:
- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`

Password for these accounts: `secret_sauce`

The `problem_user` account intentionally exposes defects that are useful for bug-reporting practice.

## Author
Buthmi Sedara
