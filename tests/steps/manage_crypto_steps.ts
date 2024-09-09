import { BaseSteps } from './base_steps';
import { ManageCryptoPage } from '../pages/manage_crypto_page';
import { expect } from 'playwright/test';
import {HomePage} from "../pages/home_page";

export class ManageCryptoSteps extends BaseSteps {
  private manageCryptoPage: ManageCryptoPage;

  private homePage: HomePage

  constructor(page: any) {
    super(page);
    this.manageCryptoPage = new ManageCryptoPage(page);
    this.homePage = new HomePage(page);
  }

  async unsetAllCryptoToggleButtons() {
    await this.homePage.clickSearchButton();
    await this.manageCryptoPage.disableAllToggleButtons();
    await this.manageCryptoPage.clickBackButton();
  }

  async selectTokenNetwork(network: string, contractAddress: string) {
    await this.manageCryptoPage.clickPlusButton();
    await this.manageCryptoPage.selectTokenNetwork(network);
    await this.manageCryptoPage.enterTokenContractAddress(contractAddress);
  }

  async validateTokenSymbol(tokenSymbol: string) {
    await expect(this.manageCryptoPage.isThisTokenCorrectMSG).toBeVisible()
    // await expect(this.manageCryptoPage.getTokenSymbol(tokenSymbol)).tohave('Submitted');
    // await expect(this.manageCryptoPage.getTokenSymbol(tokenSymbol), "Cant find the custom token on the home screen").toEqual("Symbol · " + tokenSymbol);
  }

  async addToken() {
    await this.manageCryptoPage.clickOnAddTokenButton()
  }
}