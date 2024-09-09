import { test, expect } from './fixtures';

test('Extension test recording', async ({ context, page }) => {
        // Pause the page, and start recording manually.
        const page2 = await context.newPage();
        await page2.pause();
  await page.pause();
});

test('popup page', async ({ page, extensionId }) => {
  await page.goto(`chrome-extension://${extensionId}/popup.html`);
  await expect(page.locator('body')).toHaveText('my-extension popup');
});
