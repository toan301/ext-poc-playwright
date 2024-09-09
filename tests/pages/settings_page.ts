import { Locator, Page } from '@playwright/test';
import path from 'path';
export class SettingsPage {

    constructor(private page: Page) {}
    public readonly showButton: Locator = this.page.getByRole('button', { name: 'Show' });
    public readonly hideButton: Locator = this.page.getByRole('button', { name: 'Hide' });
    public readonly secretPhraseWarningMessage: Locator = this.page.getByTestId('do-not-share-seedphrase-alert');
    public readonly shareProductAnalyticsToggle: Locator = this.page.getByRole('switch', { name: 'Share Product Analytics' });
    public readonly setAsDefaultWalletToggle: Locator = this.page.getByRole('switch', { name: 'Set As Default Wallet' });

    async fillPasswordField(password: string) {
        await this.page.getByTestId('password-field').fill(password);
    }

    async clickViewSecretPhrase() {
        await this.page.getByText('View Secret Phrase').click();
    }

    async clickReveal() {
        await this.page.getByRole('button', { name: 'Reveal' }).click();
    }
    async clickShowButton() {
        await this.showButton.click();
    }

    async clickSubmitButton() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
    async clickProceedButton() {
        await this.page.getByRole('button', { name: 'Proceed' }).click();
    }

    async clickDownloadButton() {
        await this.page.getByRole('button', { name: 'Download' }).click();
    }

    async waitForDownloadEvent() {
        return await this.page.waitForEvent('download');
    }

    async downloadSecretPhrase(): Promise<string> {
        const downloadPromise = this.waitForDownloadEvent();
        await this.clickDownloadButton();
        const download = await downloadPromise;

        const pathToExtension = path.join(__dirname, '../downloads/')
        let secretFilePath = pathToExtension + download.suggestedFilename()
        // Wait for the download process to complete and save the downloaded file somewhere.
        await download.saveAs(secretFilePath);
        return secretFilePath;
    }

    async closeTipsModalPopup() {
        await this.page.getByTestId('close-modal-button').click();
    }


    async clickValidSecretPhraseButtons(secretPhrase: string[]) {
        for (let i = 0; i < secretPhrase.length; i++) {
            await this.page.click(`button:text("${secretPhrase[i]}"):not([disabled])`);
        }
    }

    async clickNextButton() {
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}

