
import path from 'path';
import { Locator, Page } from '@playwright/test';
export class HomePage {
    constructor(private page: Page) {}
    public backupBanner: Locator = this.page.getByTestId('backup-seedphrase-alert')

    readonly noCryptoActivatedMessage = this.page.getByText('No crypto activated');
    private readonly gotItButton = this.page.getByRole('button', { name: 'Got it' });
    private readonly readyToUseWalletButton = this.page.getByRole('button', { name: 'I’m ready to use Trust Wallet' });
    private readonly closeTipsModelPopup = this.page.getByTestId('close-modal-button');
    readonly searchButton = this.page.getByTestId('wallet-header-manage-crypto-button');
    readonly swapButton = this.page.getByTestId('wallet-board-swap-button');
    readonly manageCryptoButton = this.page.getByRole('button', { name: 'Manage crypto' });

    async clickOnGotIt() {
        await this.gotItButton.click();
    }
    async clickReadyToUseTrustWallet() {
        await this.readyToUseWalletButton.click();
    }
    async clickOnBackUpBanner() {
        await this.backupBanner.click();
        await this.page.waitForTimeout(1000);
    }

    async closeTipsPopup() {
        await this.closeTipsModelPopup.waitFor({ state: 'visible' });
        await this.closeTipsModelPopup.click();
    }

    async clickSearchButton() {
        await this.searchButton.waitFor({ state: 'visible' });
        await this.searchButton.click();
    }

    async clickSwapButton() {
        await this.swapButton.waitFor({ state: 'visible' });
        await this.swapButton.click();
    }

    async isNoCryptoActivatedMessageVisible() {
        return await this.noCryptoActivatedMessage.isVisible();
    }

    async isTokenVisible(tokenSymbol: string): Promise<boolean> {
        return await this.page.getByText(tokenSymbol, { exact : true }).isVisible();
    }
}