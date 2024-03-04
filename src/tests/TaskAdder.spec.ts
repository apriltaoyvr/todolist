// @ts-check
import { test, expect } from '@playwright/test';
import { createTask } from './helpers';

test('should create a task called "Learn Playwright" with button submission', async ({
  page,
}) => {
  await page.goto('/');

  await createTask(page, 'Learn Playwright');

  // Expect the task to be visible in the list with the text "Learn Playwright".
  await expect(
    page.getByRole('listitem').getByText('Learn Playwright'),
  ).toContainText('Learn Playwright');
});

test('should create a task named "Learn Keypress" by pressing Enter', async ({
  page,
}) => {
  await page.goto('/');

  await createTask(page, 'Learn Keypress', false);

  // Expect the task to be visible in the list with the text "Learn Keypress"
  await expect(
    page.getByRole('listitem').getByText('Learn Keypress'),
  ).toContainText('Learn Keypress');
});

test('should not create a task when input is empty', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Add task').fill('a');
  await page.keyboard.press('Backspace');

  // Expect the button to be disabled as the input is empty.
  await expect(page.locator('button')).toBeDisabled;
});
