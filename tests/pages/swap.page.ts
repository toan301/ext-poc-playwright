import { Locator, Page } from '@playwright/test';
export class SwapPage {
    constructor(private page: Page) {}
    readonly swapButton = this.page.getByRole('button', { name: 'Swap' });
    readonly swapToTokenButton = this.page.getByTestId('swap-to-asset-selector');
    readonly fromNetworkButton = this.page.locator('xpath=//small[contains(.,"From")]//following-sibling::div[@role = "button"]')
    readonly toNetworkButton = this.page.locator('xpath=//small[contains(.,"To")]//following-sibling::div[@role = "button"]')
    readonly searchNetworkInputField = this.page.getByPlaceholder('Search network')
    readonly searchCryptoToInputField = this.page.getByPlaceholder('Search crypto')
    readonly swapFromTokenNameField: Locator = this.page.getByTestId('swap-from-asset-selector')
    readonly swampFromAmountInputField: Locator = this.page.getByTestId('swap-from-amount-input')
    readonly slippageToleranceField: Locator = this.page.locator('xpath=//*[contains(text(),"Slippage Tolerance")]//following-sibling::*/small[@data-testid="swap-slippage"]')

    async clickSwapToTokenButton() {
        await this.swapToTokenButton.click();
    }

    async enterCryptoTo(crypto: string) {
        await this.searchCryptoToInputField.fill(crypto);
    }

    async selectCryptoFromSearchResults(crypto: string) {
        // exact match as it's possible to have multiple token networks with prefix
        this.page.locator(`:text-is("${crypto}")`).click();
    }

    async getSlippageTolerance() {
        return await this.slippageToleranceField.textContent();
    }

    async clickSwapToNetworkButton() {
        await this.toNetworkButton.click();
    }

    async clickSwapFromNetworkButton() {
        await this.fromNetworkButton.click();
    }

    async enterNetworkName(networkName: string) {
        await this.searchNetworkInputField.fill(networkName);
    }

    async selectNetwork(networkName: string) {
        await this.page.getByRole('radio', { name: `${networkName}` }).click()
    }

    async selectCrypto(networkName: string) {
        await this.page.locator(`:text-is("${networkName}")` ).click()
    }

    async fromTokenName(): Promise<null|string>     {
        return await this.swapFromTokenNameField.textContent();
    }

    async enterFromAmount(amount: string) {
        await this.swampFromAmountInputField.waitFor({ state: 'visible' });
        await this.swampFromAmountInputField.fill(amount);
    }

    async clickSwapButton() {
        await this.swapButton.click();
    }
}