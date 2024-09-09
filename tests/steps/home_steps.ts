import { BaseSteps } from './base_steps';
import { HomePage } from '../pages/home_page';
import { expect } from 'playwright/test';

export class HomePageSteps extends BaseSteps {
  private homePage: HomePage;

  constructor(page: any) {
    super(page);
    this.homePage = new HomePage(page);
  }

  async acceptTipsPopup() {
    await this.homePage.clickOnGotIt();
    await this.homePage.clickReadyToUseTrustWallet();
  }

  async closeTipsModalPopup() {
    await this.homePage.closeTipsPopup();
  }

  async clickSwapButton() {
    await this.homePage.clickSwapButton();
  }

  async verifyBackupBannerNotVisible() {
    await expect(this.homePage.backupBanner).not.toBeVisible();
  }

  async clickOnBackUpBanner() {
    await this.homePage.clickOnBackUpBanner();
  }

  async clickSearchButton() {
    await this.homePage.clickSearchButton();
  }

  async verifyNoCryptoActivatedMessageVisible() {
    await expect(this.homePage.isNoCryptoActivatedMessageVisible()).toBeTruthy();
  }

  async verifyCryptoTokenAddedToHomePage(tokenSymbol: string) {
    await expect(this.homePage.manageCryptoButton).toBeVisible();
    await expect(this.homePage.searchButton).toBeVisible();
    await expect(this.page.getByText(tokenSymbol, { exact : true }),
        `Cant find the custom token ${tokenSymbol} on the home screen`).toBeVisible();
  // await expect(this.homePage.isTokenVisible(tokenSymbol),
  //       `Cant find the custom token ${tokenSymbol} on the home screen`).toBeTruthy();
  }
}