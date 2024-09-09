import {BrowserContext, chromium, test as base, TestInfo} from '@playwright/test'
import path from 'path'
import * as fs from 'fs';
import propertiesReader from 'properties-reader';
import {Steps} from "../steps/steps";

export const test = base.extend<{
  context: BrowserContext
  extensionId: string
}>({
  context: async ({}, use) => {
    const pathToExtension = path.join(__dirname, '../resources/extension/release-2.12.0-9fe78fb-poc')
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      // recordVideo: {
      //   dir: "./recordings"
      // }
      //   ,
      args: [
        // process.env.CI ? `--headless=new` : '',
        // `--headless=false`,
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    })

    await use(context)

    await context.close()
  },
  extensionId: async ({ context }, use) => {
    // for manifest v3:
    let [background] = context.serviceWorkers()
    if (!background) {
      background = await context.waitForEvent('serviceworker')
    }
    
    const extensionId = background.url().split('/')[2]
    await use(extensionId)
  },
  saveVideo: [
    async ({ page }: any, use: () => any, testInfo: any) => {
      await use();
      // if (testInfo.status === 'failed') {
      //   const originalVideoPath = await page.video().path();
      //   testInfo.attachments.push({
      //     name: 'video',
      //     path: originalVideoPath,
      //     contentType: 'video/webm',
      //   });
      //   }
    },
    { auto: true },
  ],
})

test.beforeEach(async ({ context, page, extensionId }) => {
  console.log('setup: beforeEach');
  const defaultLaunchPagePromise = context.waitForEvent('page');
  const defaultLaunchPage = await defaultLaunchPagePromise;
  // TODO: defaultLaunchPage.close() sometimes closing actual page instead of extension page
  // await defaultLaunchPage.close();
  Steps.initializeSteps(page, context);
  await Steps.onboarding.goToOnboarding(extensionId, context);
});

test.afterEach(async ({ page }, testInfo) => {
  console.log('teardown: afterEach');

  const screenshot = await page. screenshot();
  await testInfo. attach('screenshot', { body: screenshot, contentType: 'image/ png' });
})


export const expect = test.expect
