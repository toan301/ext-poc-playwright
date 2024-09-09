import { test as base, chromium, type BrowserContext } from '@playwright/test';
import path from 'path';
// import OnboardingPage from "../services/pages/onboarding.page";

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, 'resources/extension/release-2.12.0-9fe78fb-poc');
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.route('**/*', route => route.continue());

    await context.close();
  },
  extensionId: async ({ context }, use) => {

    // for manifest v3:
    let [background] = context.serviceWorkers();
    await context.route('**/*', route => route.continue());

    if (!background)
      background = await context.waitForEvent('serviceworker');

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  //     // Pause the page, and start recording manually.
  const page2 = await context.newPage();
  await page2.pause();
  },
}
);
// export type PageObjects = {
//   homePage: OnboardingPage;
// };

// export const pages = base.extend<PageObjects>({
//   homePage: async ({ page }, use) => {
//     const homePage = new OnboardingPage(page);
//     await use(homePage);
//   },
// });

export const expect = test.expect;