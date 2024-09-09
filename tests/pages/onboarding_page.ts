// onboarding_page.ts
import { Page, Locator } from '@playwright/test';

export class OnboardingPage {

    public readonly onBoardingPageTitle = this.page.getByTestId('onboarding-step-title');

    private passwordFieldTestId = 'password-field';
    private checkboxTermsOfServiceTestId = this.page.getByTestId('checkbox-terms-of-service');
    public readonly trustSetAsDefaultWalletToggle: Locator = this.page.getByRole('switch', { name: 'default-wallet' });
    public readonly openWallet: Locator = this.page.getByRole('button', { name: 'Open wallet' });

    public readonly createNewWalletButton = this.page.getByRole('button', { name: 'Create a new wallet' });
    public readonly importOrRecoverWalletButton = this.page.getByRole('button', { name: 'Import or recover wallet' });
    public readonly ledgerButton = this.page.getByRole('button', { name: 'Ledger' });

    readonly nextButton = this.page.getByRole('button', { name: 'Next' });
    readonly clearAllButton = this.page.getByRole('button', { name: 'Clear all' });

    private readonly noThankyouButton = this.page.getByRole('button', { name: 'No thanks' });

    private readonly shareDateButton = this.page.getByRole('button', { name: 'Share data' });

    private readonly openWalletButton = this.page.getByRole('button', { name: 'Open wallet' });

    private readonly viewSecretPhraseButton = this.page.getByText('View Secret Phrase');

    private readonly revealButton = this.page.getByRole('button', { name: 'Reveal' });

    private readonly downloadButton = this.page.getByRole('button', { name: 'Download' });

    private readonly secretPhraseWordsDropDown = this.page.locator( 'id=headlessui-listbox-button-1');
    private readonly secretPhrase12Words = this.page.getByText( 'I have a 12 word Secret Phrase');
    private readonly secretPhrase24Words = this.page.getByText('I have a 24 word Secret Phrase');
    readonly secretPhraseInputFields   = this.page.getByRole('textbox', { name: 'Word #'})

    constructor(private page: Page) {}

    async clickCreateNewWalletButton() {
        await this.createNewWalletButton.click();
    }

    async clickImportOrRecoverWalletButton() {
        await this.importOrRecoverWalletButton.click();
    }

    async fillPasswordField(password: string) {
        await this.page.getByTestId(this.passwordFieldTestId).nth(0).fill(password);
        await this.page.getByTestId(this.passwordFieldTestId).nth(1).fill(password);
    }

    async fillPasswordScreen(password: string) {
        await this.fillPasswordField(password)
        await this.checkTermsOfService();
        await this.clickNextButton();
    }

    async inputSecretPhrase(seeds: string): Promise<void> {
        const seedArray: string[] = seeds.split(" ");
        let secretPhraseInputFields = await this.getAllSecretPhraseInputFields();
        for (let i = 0; i < seedArray.length; i++) {
            await secretPhraseInputFields[i].fill(seedArray[i]);
        }
    }

    async getAllSecretPhraseInputFields()     {
        return await this.secretPhraseInputFields.all()
    }

    public async pasteSecretPhrase(seeds: string): Promise<void> {
        let firstField   =  (await this.getAllSecretPhraseInputFields())[0]
        await firstField.focus();
        // await this.page.evaluate("navigator.clipboard.writeText(" + seeds+ ")")
        await this.page.evaluate(`navigator.clipboard.writeText("${seeds}")`);
        // Insert the text
        await this.page.keyboard.press('ControlOrMeta+V');
    }

    async selectWordSecretPhraseDropdown(secretLength: number): Promise<void> {
        if (secretLength === 24) {
            // click on dropdown option
            await this.clickSecretPhraseWordsDropDown();
            await this.clickSecret24WordOption();
        } else {
            // default dropdown is 12 words
        }
    }



    async checkTermsOfService() {
        await this.checkboxTermsOfServiceTestId.check();
    }

    async clickNextButton() {
        await this.nextButton.click();
    }
    
    async clickNoThankyouButton() {
        await this.noThankyouButton.click();
    }
    async toggleTrustWalletAsDefault() {
        await this.trustSetAsDefaultWalletToggle.click();
    }

    async clickShareDataButton() {
        await this.shareDateButton.click();
    }

    async clickOpenWallet() {
        await this.openWalletButton.click();
    }

    async clickViewSecretPhrase() {
        await this.viewSecretPhraseButton.click();
    }

    async clickReveal() {
        await this.revealButton.click();
    }


    async clickShow() {
        await this.page.getByRole('button', { name: 'Show' }).click();
    }

    async clickDownloadButton() {
        await this.downloadButton.click();
    }

    async waitForDownloadEvent() {
        return await this.page.waitForEvent('download');
    }

    async saveDownloadedFile(download: any, pathToExtension: string) {
        let secretFilePath = pathToExtension + download.suggestedFilename();
        await download.saveAs(secretFilePath);
    }

    async clickOnOpenWallet() {
        await this.openWallet.click();
    }

    // private async clickSecretWordDropdown() {
    //     await this.page.click('headlessui-listbox-button-1');
    // }

    private async clickSecret24WordOption() {
        await this.secretPhrase24Words.click();
    }

    private async clickSecret12WordOption() {
        await this.secretPhrase12Words.click();
    }

    private async clickSecretPhraseWordsDropDown() {
        await this.secretPhraseWordsDropDown.click();
    }
}