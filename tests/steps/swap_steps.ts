import {BaseSteps} from "./base_steps";
import {BrowserContext, Page} from "@playwright/test";
import { SwapPage } from "../pages/swap.page";
import {expect} from "../fixtures/fixtures";
import {SwapConfirmPage} from "../pages/swap_confirm_page";

export class SwapSteps extends BaseSteps {
    private swapPage: SwapPage;
    constructor( page: Page, browserContext: BrowserContext) {
        super(page, browserContext);
        this.swapPage = new SwapPage(page);
    }

    // async clickSwapToTokenButton() {
    //     await this.swapPage.clickSwapToTokenButton();
    // }

    async selectFromNetwork(networkName: string) {
        await this.swapPage.clickSwapFromNetworkButton();
        await this.searchNetwork(networkName);
    }

    async selectToNetwork(networkName: string) {
        await this.swapPage.clickSwapToNetworkButton();
        await this.searchNetwork(networkName);
    }

    async selectToToken(tokenName: string) {
        await this.swapPage.clickSwapToTokenButton()
        await this.swapPage.enterCryptoTo(tokenName);
        await this.swapPage.selectCrypto(tokenName);
    }

    async verifySlippageTolerance() {
        expect(await this.swapPage.slippageToleranceField).toBeVisible();
        let slippageTolerance = await this.swapPage.getSlippageTolerance()
        expect(slippageTolerance, "Slippage Tolerance is not 1%").toBe("1%");
    }

    async clickSwapAndVerifySwapConfirmPage() {
        const pagePromise = this.browserContext.waitForEvent('page');
        await this.swapPage.clickSwapButton()
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        let swapConfirmPage : SwapConfirmPage = new SwapConfirmPage(newPage)
        // await verifySwapConfirmPage();
        await swapConfirmPage.rejectButton.click()
        await this.swapPage.clickSwapToTokenButton();
    }


    async searchNetwork(networkName: string) {
        await this.swapPage.enterNetworkName(networkName);
        await this.swapPage.selectNetwork(networkName);
    }

    async verifyDefaultFromTokenName(tokenName: string) {
        let str = await this.swapPage.swapFromTokenNameField.textContent()
        let fromTokenName = await this.swapPage.fromTokenName()
        expect(await this.swapPage.swapFromTokenNameField.textContent(), `From default token is not ${tokenName}`).toBe(tokenName);
    }

    async verifySwapPage() {

    }

    async enterFromAmount(amount: string) {
        await this.swapPage.enterFromAmount(amount);
    }
}