import { SettingsPage } from '../pages/settings_page';
import { expect } from 'playwright/test';
import { getSecretPhraseFromFile } from '../utils/file_utils';
import { BaseSteps } from './base_steps';

export class SettingsPageSteps extends BaseSteps {
  private settingsPage: SettingsPage;

  constructor(page: any) {
    super(page);
    this.settingsPage = new SettingsPage(page);
  }

  async viewSecretPhrase(password: string) {
    await this.settingsPage.clickViewSecretPhrase();
    await expect(this.settingsPage.secretPhraseWarningMessage).toHaveText("Do NOT share your Secret Phrase!These words can be used to steal all your funds.");

    await this.settingsPage.fillPasswordField(password);
    await this.settingsPage.clickReveal();
    await this.settingsPage.clickShowButton();
  }

  async verifySecretPhraseVisible() {
    await expect(this.settingsPage.hideButton).toBeVisible();
  }

  async downloadAndReadSecretPhrase(): Promise<string[]> {
    let secretFilePath: string = await this.settingsPage.downloadSecretPhrase();
    await this.settingsPage.closeTipsModalPopup();
    return await getSecretPhraseFromFile(secretFilePath);
  }

  async backUpWalletByEnteringSecretPhrase(password: string, secretPhrase: string[]) {
    await this.settingsPage.clickShowButton();
    await this.settingsPage.fillPasswordField(password);
    await this.settingsPage.clickSubmitButton();
    await this.settingsPage.clickProceedButton();
    await this.settingsPage.clickValidSecretPhraseButtons(secretPhrase);
    await this.settingsPage.clickNextButton();
}

  async verifyProductAnalyticsToggleState({ isOn }: { isOn: boolean }) {
    if (isOn) {
      await expect(this.settingsPage.shareProductAnalyticsToggle).toBeChecked();
    } else {
      await expect(this.settingsPage.shareProductAnalyticsToggle).not.toBeChecked();
    }
  }

  async verifyTrustWalletAsDefaultToggleState({ isOn }: { isOn: boolean }) {
    if (isOn) {
      await expect(this.settingsPage.setAsDefaultWalletToggle).toBeChecked();
    } else {
      await expect(this.settingsPage.setAsDefaultWalletToggle).not.toBeChecked();
    }
  }
}