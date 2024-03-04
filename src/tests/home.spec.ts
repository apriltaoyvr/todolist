// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Todo List/);
});

test('has heading', async ({ page }) => {
  await page.goto('/');

  // Expects page to have a heading with the name of Todo List ✅.
  await expect(
    page.getByRole('heading', { name: 'Todo List ✅' }),
  ).toBeVisible();
});
