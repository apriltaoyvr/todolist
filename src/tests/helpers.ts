import { type Page } from '@playwright/test';

/**
 * Creates a task in test environments
 * @param {Page} page - Page provides methods to interact with a single tab in a Browser, or an extension background page in Chromium.
 * @param {string} taskName - The name of the task.
 * @param {boolean} [button=true] - Whether to use the button to submit the task.
 * @description A helper function to create a task in the test environment.
 */

export const createTask = async (
  page: Page,
  taskName: string,
  button = true,
) => {
  await page.getByPlaceholder('Add task').click();
  await page.getByPlaceholder('Add task').fill(taskName);

  button
    ? await page.locator('section').getByLabel('Submit task').click()
    : await page.keyboard.press('Enter');
};

/**
 * Presses a button associated with a task in test environments
 * @param {Page} page - Page provides methods to interact with a single tab in a Browser, or an extension background page in Chromium.
 * @param {string} taskText - The text of the task.
 * @param {string} buttonLabel - The label of the button to press.
 * @description A helper function for pressing task item related buttons (e.g. star, delete, mark as completed).
 */

export const pressTaskButton = async (
  page: Page,
  taskText: string,
  buttonLabel: string,
) => {
  await page
    .locator('li')
    .filter({ hasText: taskText })
    .getByLabel(buttonLabel)
    .click();
};
