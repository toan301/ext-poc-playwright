import { test, expect } from '../fixtures/fixtures'
import {Steps} from "../steps/steps";
import config from "../utils/config";

test.describe('Swap', () => {
    test('Swap coin to token on Polygon', async ({ page }) => {
        let password = config.get("password")
        let seed = config.get("swapWalletSeed")
        await Steps.onboarding.verifyOnboardingPage();
        await Steps.onboarding.importWalletByEnteringSecretPhrase({ password: password, agreeToShareData: false, walletSeed: seed, setTrustWalletAsDefault: false });
        await Steps.home.clickSwapButton();
        await Steps.swap.verifySwapPage();

        await Steps.swap.selectFromNetwork("Polygon");
        await Steps.swap.verifyDefaultFromTokenName("MATIC");

        await Steps.swap.selectToNetwork("Polygon");
        await Steps.swap.selectToToken("USDT");

        await Steps.swap.enterFromAmount("0.01");
        await Steps.swap.verifySlippageTolerance();

        await Steps.swap.clickSwapAndVerifySwapConfirmPage();


    })
});