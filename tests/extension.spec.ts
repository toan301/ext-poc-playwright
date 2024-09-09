const { chromium } = require('@playwright/test');
// import { test as base, type BrowserContext } from '@playwright/test';
import path from 'path';
import { test, expect } from './fixtures';
// import { test as base, type BrowserContext } from '@playwright/test';

test('has title', async ({ page }) => {
    const pathToExtension = path.join(__dirname, 'resources/extension/release-2.12.0-9fe78fb-poc');
 
  // Make sure to run headed.
  const browser = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  
  // Setup context however you like.
  const context = await browser.newContext({ headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ], });
  await context.route('**/*', route => route.continue());

  // Pause the page, and start recording manually.
  const page2 = await context.newPage();
  await page2.pause();
});