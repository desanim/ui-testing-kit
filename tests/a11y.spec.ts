// Accessibility tests: Axe (WCAG 2.2 AA) + keyboard checks for the R1 Critical fixes.
// Run: npm run test:a11y
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Full Axe scan on each step. Gate: 0 Critical/Serious (matches templates/a11y-bug-report.md severity).
for (const step of ['product', 'checkout', 'done']) {
  test(`axe: ${step} step has no Critical/Serious violations`, async ({ page }) => {
    if (step !== 'product') {
      await page.getByRole('button', { name: 'Add to cart and go to checkout' }).click();
    }
    if (step === 'done') {
      await page.getByRole('button', { name: 'Place order' }).click();
    }
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    const blocking = results.violations.filter((v) =>
      ['critical', 'serious'].includes(v.impact ?? '')
    );
    expect(blocking, JSON.stringify(blocking.map((v) => v.id), null, 2)).toEqual([]);
  });
}

// R1 Critical (WCAG 2.1.2): date picker must not trap the keyboard — Esc closes, focus returns.
test('keyboard: date picker has no trap, Esc returns focus', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to cart and go to checkout' }).click();
  await page.locator('#date').focus();
  await expect(page.locator('#datepicker')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#datepicker')).toBeHidden();
  await expect(page.locator('#date')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('#place-order')).toBeFocused();
});

// R1 Critical (WCAG 4.1.2): "Apply code" must expose an accessible name.
test('screen reader: apply button has an accessible name', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to cart and go to checkout' }).click();
  await expect(page.getByRole('button', { name: 'Apply voucher code' })).toBeVisible();
});

// R1 Serious (WCAG 2.4.7): focus indicator must be visible (3:1 handled in styles.css).
test('keyboard: full checkout flow is Tab-reachable', async ({ page }) => {
  await page.keyboard.press('Tab'); // skip link
  await page.keyboard.press('Tab'); // add to cart
  await expect(page.locator('#add-to-cart')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#step-checkout')).toBeVisible();
});
