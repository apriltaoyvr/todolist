// @ts-check
import { test, expect } from '@playwright/test';
import { createTask, pressTaskButton } from './helpers';

test('should delete a task by pressing its delete button', async ({ page }) => {
  await page.goto('/');

  await createTask(page, 'Delete this task');

  await pressTaskButton(page, 'Delete this task', 'Delete task');

  await expect(page.getByText('Delete this task')).not.toBeVisible();
});

test('should mark a task as completed by clicking the completed button', async ({
  page,
}) => {
  await page.goto('/');

  await createTask(page, 'Mark as complete');

  await pressTaskButton(page, 'Mark as complete', 'Mark task as complete');

  await expect(page.getByText('Mark as complete')).toHaveClass(/line-through/);
});

test('should star a task by pressing its star button', async ({ page }) => {
  await page.goto('/');

  await createTask(page, 'Star this task');

  await pressTaskButton(page, 'Star this task', 'Star task');

  await expect(page.getByText('Star this task')).toHaveClass(
    /dark:text-yellow-400/,
  );
});
