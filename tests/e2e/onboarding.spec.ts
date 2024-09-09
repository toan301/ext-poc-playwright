import { test, expect } from '../fixtures/fixtures'
import { Steps } from '../steps/steps';
import config from "../utils/config";

// test.beforeEach(async ({ context, page, extensionId }) => {
//   const defaultLaunchPagePromise = context.waitForEvent('page');
//   const defaultLaunchPage = await defaultLaunchPagePromise;
//   // TODO: defaultLaunchPage.close() sometimes closing actual page instead of extension page
//   // await defaultLaunchPage.close();
//   Steps.initializeSteps(page);
//   await Steps.onboarding.goToOnboarding(extensionId, context);
// });

test.describe('Create wallet', () => {
  test('backup wallet from banner on home screen', async () => {
    let password = config.get("password")
    await Steps.onboarding.verifyOnboardingPage();
    await Steps.onboarding.createNewWallet({ password: password, agreeToShareData: true, agreeToSetTrustWalletAsDefault: true });

    await Steps.home.acceptTipsPopup();
    await Steps.home.navigateToSettings();
    
    await Steps.settings.viewSecretPhrase(password);
    await Steps.settings.verifySecretPhraseVisible();

    let secretPhrase: string[] = await Steps.settings.downloadAndReadSecretPhrase();
    
    await Steps.settings.navigateToHome();
    await Steps.home.clickOnBackUpBanner();
    await Steps.settings.backUpWalletByEnteringSecretPhrase(password, secretPhrase);
    
    await Steps.home.verifyBackupBannerNotVisible()
  })

  test('Default wallet-OFF, Product Analytics-OFF', async () => {
    let password = config.get("password")
    await Steps.onboarding.verifyOnboardingPage();
    await Steps.onboarding.createNewWallet({ 
      password: password, 
      agreeToShareData: false ,
      agreeToSetTrustWalletAsDefault: false
    });

    await Steps.home.closeTipsModalPopup();
    await Steps.home.navigateToSettings();

    await Steps.settings.verifyProductAnalyticsToggleState({isOn: false});
    await Steps.settings.verifyTrustWalletAsDefaultToggleState({isOn: false});
  })

  test('Default wallet-ON, Product Analytics-ON', async () => {
    let password = config.get("password")
    await Steps.onboarding.verifyOnboardingPage();
    await Steps.onboarding.createNewWallet({ 
      password: password, 
      agreeToShareData: true ,
      agreeToSetTrustWalletAsDefault: true
    });

    await Steps.home.acceptTipsPopup();
    await Steps.home.navigateToSettings();

    await Steps.settings.verifyProductAnalyticsToggleState({isOn: true});
    await Steps.settings.verifyTrustWalletAsDefaultToggleState({isOn: true});
  })
})