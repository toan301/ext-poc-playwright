import { OnboardingPage } from '../pages/onboarding_page';
import { SettingsPage } from '../pages/settings_page';
import { HomePage } from '../pages/home_page';
import { BrowserContext, expect } from 'playwright/test';
import { BaseSteps } from './base_steps';
import {Steps} from "./steps";

export class OnboardingSteps extends BaseSteps {
  private onboardingPage: OnboardingPage;

  constructor(page: any) {
    super(page);
    this.onboardingPage = new OnboardingPage(page);
  }

  async verifyOnboardingPage() {
    await expect(this.onboardingPage.onBoardingPageTitle).toHaveText("Welcome to the Trust Wallet Extension");
    await expect(this.onboardingPage.createNewWalletButton).toBeVisible();
    await expect(this.onboardingPage.importOrRecoverWalletButton).toBeVisible();
    await expect(this.onboardingPage.ledgerButton).toBeVisible();
  }

  async createNewWallet({ password, agreeToShareData: shareData, agreeToSetTrustWalletAsDefault: setTrustWalletAsDefault }:
      { password: string, agreeToShareData: boolean , agreeToSetTrustWalletAsDefault: boolean}) {
      await this.onboardingPage.clickCreateNewWalletButton();
      await this.onboardingPage.fillPasswordScreen(password);
      await this.setShareDatePermissions(shareData);
      await this.setTrustWalletAsDefaultWallet(setTrustWalletAsDefault)
      await this.openWallet();
  }

  async importWalletByEnteringSecretPhrase({password, walletSeed, agreeToShareData, setTrustWalletAsDefault}: {password: string, walletSeed: string, agreeToShareData: boolean, setTrustWalletAsDefault: boolean
  }) {
    await Steps.onboarding.importOrRecoverWallet(password);
    await Steps.onboarding.pasteSecretPhraseAndClickNext(walletSeed);
    await Steps.onboarding.setShareDatePermissions(agreeToShareData);
    await this.setTrustWalletAsDefaultWallet(setTrustWalletAsDefault)
    await this.openWallet();
    await Steps.home.closeTipsModalPopup();
  }

  async openWallet() {
    await this.onboardingPage.clickOpenWallet();
  }

  async importOrRecoverWallet(password: string) {
    await this.onboardingPage.clickImportOrRecoverWalletButton();
    await this.onboardingPage.fillPasswordScreen(password);
  }

  async inputSecretPhrase(seeds: string): Promise<void> {
    const seedArray: string[] = seeds.split(" ");
    await this.onboardingPage.selectWordSecretPhraseDropdown(seedArray.length)
    await this.verifySecretPhraseDropDown(seedArray);
    await this.onboardingPage.inputSecretPhrase(seeds);
  }

  async pasteSecretPhraseAndClickNext(seeds: string) {
    // Paste the secret phrase
    await this.onboardingPage.pasteSecretPhrase(seeds);
    await this.clickNext();
  }

  async clickNext() {
    // Click the submit button
    await this.onboardingPage.nextButton.click();
  }

  async clearAndVerifySecretPhrasesCleared() {
    // clear all the input fields
    await this.onboardingPage.clearAllButton.click();
    let secretInputFields  = await this.onboardingPage.getAllSecretPhraseInputFields()
    for(const inputField of secretInputFields) {
      await expect(inputField, "Secrete Phrase Input field should be empty after clearing").toHaveValue('');
    }
  }

  private async verifySecretPhraseDropDown(seedArray: string[]) {
    let secretPhraseInputFields = await this.onboardingPage.getAllSecretPhraseInputFields()
    if (seedArray.length === 24) {
      expect(secretPhraseInputFields.length, 'The count of input fields should be 24').toBe(24);
      expect(seedArray.length, 'The count of seeds should be 24').toBe(24);
    } else {
      expect(secretPhraseInputFields.length, 'The count of input fields should be 12').toBe(12,);
      expect(seedArray.length, "The count of seeds should be 12").toBe(12);
    }
  }



  async toggleOffTrustWalletAsDefault() {
    await expect(this.onboardingPage.trustSetAsDefaultWalletToggle).toBeChecked();
    await this.onboardingPage.toggleTrustWalletAsDefault();
    await expect(this.onboardingPage.trustSetAsDefaultWalletToggle).not.toBeChecked();
  }

  async setShareDatePermissions(shareData: boolean) {
    if (shareData) {
      await this.onboardingPage.clickShareDataButton();
    } else {
      await this.onboardingPage.clickNoThankyouButton();
    }
  }

  async setTrustWalletAsDefaultWallet(agreeToSetTrustWalletAsDefault: boolean) {
    if (!agreeToSetTrustWalletAsDefault) {
      await this.onboardingPage.toggleTrustWalletAsDefault();
    }
  }

  async verifySuccessfulWalletImport() {
    await expect(this.onboardingPage.onBoardingPageTitle, "The wallet success message is not there. Please check...").toHaveText("You have successfully imported your wallet!");
  }
}