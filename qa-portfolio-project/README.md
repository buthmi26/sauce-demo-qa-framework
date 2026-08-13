# SauceDemo QA Automation Framework 

End-to-end QA project covering manual testing, test automation, API testing, and database validation, built against [SauceDemo](https://www.saucedemo.com/), a public demo e-commerce site used for QA practice.

## What's in this repo

| Folder/File | What it covers |
|---|---|
| `test-plan.md` | Scope, objectives, entry/exit criteria for the test effort |
| `test-cases.csv` | 20 manual test cases (login, cart, checkout) using equivalence partitioning & boundary value analysis |
| `bug-reports/` | Sample structured bug reports with screenshots |
| `tests/` | Playwright automation scripts (Page Object Model) |
| `postman/api-collection.json` | Postman collection for API testing (reqres.in) |
| `sql/validation-queries.sql` | Sample schema + SQL queries for database validation |
| `accessibility-findings.md` | Accessibility audit notes (Lighthouse) |
| `.github/workflows/tests.yml` | CI pipeline — runs automated tests on every push |

## Tools used
Manual testing · Test design techniques (equivalence partitioning, boundary value analysis) · Jira (bug tracking) · Playwright (automation, Page Object Model) · Postman (API testing) · SQL (SQLite) · GitHub Actions (CI/CD) · Lighthouse (accessibility)

## How to run the automated tests

```bash
npm install
npx playwright install
npx playwright test
```

## About SauceDemo
SauceDemo (saucedemo.com) is a purpose-built demo e-commerce site for QA practice, with several login accounts that simulate different bugs/behaviors (e.g. `standard_user`, `problem_user`, `performance_glitch_user`), making it well suited for demonstrating both manual and automated testing skills.

## Author
Buthmi Sedara — Undergraduate, University of Colombo School of Computing
