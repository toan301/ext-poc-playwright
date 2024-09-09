import { test, expect } from '../fixtures/fixtures'
import { Steps } from '../steps/steps';
import config  from '../utils/config';

test.describe('Import wallet', () => {
    const testData = new Map();
    testData.set('12 words', config.get('masterWalletSeed'));
    testData.set('24 words', config.get('24WordWalletSeed'));
    let password = config.get("password")
    for (let [key, walletSeed] of testData) {
        test(`Import a ${key} secret phrase wallet`, async () => {
            await Steps.onboarding.verifyOnboardingPage();
            await Steps.onboarding.importOrRecoverWallet(password);
            await Steps.onboarding.inputSecretPhrase(walletSeed);
            await Steps.onboarding.clearAndVerifySecretPhrasesCleared();
            await Steps.onboarding.pasteSecretPhraseAndClickNext(walletSeed);
            await Steps.onboarding.setShareDatePermissions(false);
            await Steps.onboarding.verifySuccessfulWalletImport();
        });
    }
});