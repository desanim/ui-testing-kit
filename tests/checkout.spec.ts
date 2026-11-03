// Usability-as-code: each test mirrors a task from the test plan (templates/test-plan-1pager.md).
// Success criteria double as assertions. Run: npm run test:usability
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Task 1: add item and reach checkout. R1 finding: fee was hidden; R2 guard: fee visible from step 1.
test('T1: fee visible before checkout, order completes', async ({ page }) => {
  await expect(page.locator('#fee-top')).toContainText('$5.00');
  await page.getByRole('button', { name: 'Add to cart and go to checkout' }).click();
  await expect(page.locator('#order-summary')).toContainText('$5.00');
  await expect(page.locator('#total')).toContainText('$24.99');
  await page.getByRole('button', { name: 'Place order' }).click();
  await expect(page.locator('#done-msg')).toContainText('Total charged: $24.99');
});

// Task 2: expired voucher must give a specific message + next step (R1 P1 fix).
test('T2: expired voucher error is specific and actionable', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to cart and go to checkout' }).click();
  await page.locator('#voucher').fill('SAVE20');
  await page.getByRole('button', { name: 'Apply voucher code' }).click();
  const msg = page.locator('#voucher-msg');
  await expect(msg).toContainText('expired');
  await expect(msg).toContainText('available codes');
});

// Task 3: changing address must preserve the payment method (R1 P1 fix).
test('T3: address change preserves payment selection', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to cart and go to checkout' }).click();
  await page.getByLabel('E-wallet').check();
  await page.locator('#address').selectOption('office');
  await expect(page.getByLabel('E-wallet')).toBeChecked();
});
