import { test, chromium, expect } from '@playwright/test';
import path from 'path';

export const createBrowserContext = async () => {
  // assuming your extension is built to the 'public' directory	
  const pathToExtension = path.join(__dirname, 'resources/extension/release-2.12.0-9fe78fb-poc');
  const userDataDir = '/tmp/test-user-data-dir'	
  const browserContext = await chromium.launchPersistentContext(		
    userDataDir,	
    {	
      headless: false,	
      args: [`--disable-extensions-except=${pathToExtension}`],	
      ignoreDefaultArgs: ['--disable-component-extensions-with-background-pages'],	
    }
)}

test('has title', async ({ page }) => {
  const pathToExtension = path.join(__dirname, 'resources/extension/release-2.12.0-9fe78fb-poc');
  const userDataDir = '/tmp/test-user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`
    ]
  });
  let [backgroundPage] = browserContext.backgroundPages();
  if (!backgroundPage)
    backgroundPage = await browserContext.waitForEvent('backgroundpage');

  // Test the background page as you would any other page.
  await browserContext.close();
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
