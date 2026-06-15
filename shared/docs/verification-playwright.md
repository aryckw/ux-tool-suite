# Verification Strategy — Playwright, Visual Regression, and axe-core

## Overview

A single Playwright installation covers all three test types used in this project: end-to-end behavioral tests, visual regression snapshots, and accessibility audits. This unified approach means one config file, one CI step to install browsers, and one report output — while still allowing each test type to be run or failed independently.

## Package Setup

Install the following in the build output's root (or the monorepo root if shared):

```json
{
  "devDependencies": {
    "@playwright/test": "^1.44.0",
    "@axe-core/playwright": "^4.9.0"
  }
}
```

Add these scripts to `package.json`:

```json
"scripts": {
  "test:e2e":    "playwright test --project=e2e",
  "test:visual": "playwright test --project=visual",
  "test:a11y":   "playwright test --project=a11y"
}
```

Run browser installation once after adding the package: `npx playwright install --with-deps chromium`.

## End-to-End Tests

E2E tests verify that user flows described in the Concept Spec work correctly in the running application.

**Conventions:**

- One test file per flow (e.g., `tests/e2e/search-flow.spec.ts`, `tests/e2e/checkout-flow.spec.ts`).
- Each flow test covers every screen state: empty state, loading state, error state, and success state.
- Assert on semantic content rather than CSS classes or implementation details. Prefer `getByRole`, `getByLabel`, and `getByText` over `querySelector`.

**Example:**

```ts
import { test, expect } from '@playwright/test'

test('search flow — empty, loading, results', async ({ page }) => {
  await page.goto('/')

  // Empty state
  await expect(page.getByRole('status', { name: 'No results' })).toBeVisible()

  // Loading state
  await page.getByRole('searchbox', { name: 'Search' }).fill('widget')
  await page.getByRole('button', { name: 'Search' }).click()
  await expect(page.getByRole('progressbar')).toBeVisible()

  // Success state
  await expect(page.getByRole('list', { name: 'Search results' })).toBeVisible()
  await expect(page.getByRole('listitem')).toHaveCount(5)
})
```

## Visual Regression

Visual regression tests capture screenshots of key states and compare them against committed baselines. Use Playwright's built-in `toHaveScreenshot()`.

**Conventions:**

- Visual tests live in `tests/visual/`. Name files to match the component or screen they cover.
- Set a pixel-difference threshold to tolerate minor anti-aliasing differences across environments.
- Full-page screenshots for layout tests; clipped screenshots (using `clip` or `locator.screenshot()`) for component-level tests.

**Example:**

```ts
import { test, expect } from '@playwright/test'

test('dashboard — default state screenshot', async ({ page }) => {
  await page.goto('/dashboard')
  await page.waitForLoadState('networkidle')
  await expect(page).toHaveScreenshot('dashboard-default.png', {
    maxDiffPixelRatio: 0.02,
  })
})
```

**Updating baselines**: Run `pnpm test:visual -- --update-snapshots` to regenerate all baseline images after an intentional visual change. Always review the diff before committing updated snapshots.

Baseline images are stored in `tests/visual/__screenshots__/` and must be committed to version control.

## Accessibility Tests with axe-core

Every screen and significant component state should be checked against WCAG 2.2 AA rules.

**Setup:**

```ts
import { test, expect } from '@playwright/test'
import { checkA11y } from '@axe-core/playwright'

test('dashboard — a11y audit', async ({ page }) => {
  await page.goto('/dashboard')
  await page.waitForLoadState('networkidle')

  await checkA11y(page, undefined, {
    axeOptions: {
      runOnly: ['wcag2a', 'wcag2aa'],
    },
    detailedReport: true,
    detailedReportOptions: { html: true },
  })
})
```

Pass `undefined` as the second argument to audit the full page. To scope to a component, pass a CSS selector string: `checkA11y(page, '#modal-root', ...)`.

A11y tests live in `tests/a11y/`. Name files to match the page or feature being audited.

## CI Integration

Run tests in this order in CI pipelines, with fail-fast behavior on accessibility failures:

1. **e2e** — behavioral correctness first. If flows are broken, visual and a11y results are not meaningful.
2. **a11y** — fail-fast: an accessibility failure blocks the build immediately. Accessibility regressions are treated as blocking bugs.
3. **visual** — run last. Visual diff failures produce a report for human review but may be configured as non-blocking on feature branches, blocking on `main`.

Example CI step sequence:

```yaml
- run: pnpm test:e2e
- run: pnpm test:a11y        # fail-fast
- run: pnpm test:visual
```

## File Layout

```
tests/
  e2e/
    search-flow.spec.ts
    checkout-flow.spec.ts
  visual/
    dashboard.spec.ts
    settings.spec.ts
    __screenshots__/          ← committed baseline images
  a11y/
    dashboard.spec.ts
    settings.spec.ts
```

## Playwright Config

```ts
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { outputFolder: 'playwright-report' }]],

  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },

  projects: [
    {
      name: 'e2e',
      testMatch: 'tests/e2e/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:5173' },
    },
    {
      name: 'visual',
      testMatch: 'tests/visual/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:5173' },
    },
    {
      name: 'a11y',
      testMatch: 'tests/a11y/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:5173' },
    },
  ],
})
```

The `webServer` block starts the application automatically before tests run and shuts it down afterward. In CI, `reuseExistingServer: false` ensures a clean server for every run.
