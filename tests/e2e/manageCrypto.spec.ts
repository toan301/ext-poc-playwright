import { test } from '../fixtures/fixtures'
import { Steps } from '../steps/steps';
import { NetworkDTO } from '../utils/dto/networkDto';
import config from '../utils/config';
import { log } from 'console';

test.describe('Import wallet', () => {
    test(`Importing custom tokens - Ethereum, Tron, Fantom, Arbitrum`, async () => {
        let password = config.get("password")
        await Steps.onboarding.verifyOnboardingPage();
        await Steps.onboarding.createNewWallet({ password: password, agreeToShareData: true, agreeToSetTrustWalletAsDefault: true });
        await Steps.home.closeTipsModalPopup();

        await Steps.manageCrypto.unsetAllCryptoToggleButtons()
        await Steps.home.verifyNoCryptoActivatedMessageVisible()
        let networkTokens    = getNetworkTokens()
        for(let networkToken of networkTokens) {
            let symbol: string = config.get(networkToken.symbol)
            let address: string = config.get(networkToken.address)
            if (address.startsWith("'") && address.endsWith("'")) {
                // remove extra quotes
                address = address.slice(1, -1);
            }
            log(`Adding token ${symbol} with address ${address} on network ${networkToken.network}`)
            await Steps.home.clickSearchButton()
            await Steps.manageCrypto.selectTokenNetwork(networkToken.network, address)
            await Steps.manageCrypto.validateTokenSymbol(symbol)
            await Steps.manageCrypto.addToken()
            await Steps.home.verifyCryptoTokenAddedToHomePage(symbol)
        }
    });
});

function getNetworkTokens(): NetworkDTO[] {
    return [
        new NetworkDTO("Tron", "tronCustomTokenAddress", "tronCustomTokenSymbol"),
        new NetworkDTO("Arbitrum", "arbitrumCustomTokenAddress", "arbitrumCustomTokenSymbol"),
        new NetworkDTO("Fantom", "fantomCustomTokenAddress", "fantomCustomTokenSymbol"),
        new NetworkDTO("Sui", "suiCustomTokenAddress", "suiCustomTokenSymbol"),
        new NetworkDTO("Ethereum", "ethereumCustomTokenAddress", "ethereumCustomTokenSymbol"),
        new NetworkDTO("Smart Chain", "bscCustomScamTokenAddress", "bscCustomScamTokenSymbol"),
        new NetworkDTO("Stride", "strideCustomTokenAddress", "strideCustomTokenSymbol")
    ];
}