# Accessibility Findings — SauceDemo

**Tool used:** Chrome DevTools → Lighthouse → Accessibility audit
**Page audited:** https://www.saucedemo.com/ (login page) and inventory page

## How to reproduce this audit
1. Open the site in Chrome
2. Open DevTools (F12) → Lighthouse tab
3. Select "Accessibility" category → Analyze page load

## What to look for and document
When you run this yourself, record findings under categories like:

- **Color contrast** — do text/background combinations meet WCAG AA contrast ratio (4.5:1 for normal text)?
- **Alt text** — do product images have descriptive `alt` attributes, or are they missing/generic?
- **Form labels** — are the username/password fields properly associated with `<label>` elements, or reliant on placeholder text only?
- **Keyboard navigation** — can you tab through the login form and product listing without a mouse, in a logical order?
- **ARIA usage** — are buttons/interactive elements correctly announced by screen readers (e.g. via `aria-label`)?

## Sample findings (fill in with your actual audit results)

| Issue | Severity | WCAG Reference | Recommendation |
|---|---|---|---|
| Example: Login fields rely on placeholder text rather than persistent labels | Medium | 1.3.1 (Info and Relationships) | Add visible `<label>` elements tied to inputs via `for`/`id` |
| Example: Add to cart buttons have generic text, unclear via screen reader which product | Medium | 4.1.2 (Name, Role, Value) | Add `aria-label` including product name |

*(Replace the sample rows above with your own Lighthouse results and screenshots once you run the audit.)*
