
import { Locator, Page } from '@playwright/test';
export class ManageCryptoPage {
    constructor(private page: Page) {}
    private readonly firstEnabledToggleButton    = this.page.getByRole('switch', { checked: true });
    private readonly backButton  = this.page.getByTestId("back-navigation-button")
    private readonly plusButton  = this.page.getByTestId("import-asset-info-action")
    private readonly addTokenButton  = this.page.locator(`:text-is("Add token")`);
    // private readonly addTokenButton  = this.page.getByRole("button", { name: "Add token", exactMatch: true})
    private readonly contractAddressTextField  = this.page.getByPlaceholder("Contract address")
    readonly isThisTokenCorrectMSG  = this.page.getByText("Is this the correct token?")

    async disableAllToggleButtons() {
        while((await this.firstEnabledToggleButton.all()).length > 0) {
            await (await this.firstEnabledToggleButton.all())[0].click();
        }
    }

    async clickBackButton() {
        await this.backButton.click();
    }

    async clickPlusButton() {
        await this.plusButton.click();
    }

    async selectTokenNetwork(network: string) {
        // exact match as it's possible to have multiple token networks with prefix
        await this.page.locator(`:text-is("${network}")`).click();
        // await this.page.getByText(network, { exactMatch: true }).click();
    }

    async enterTokenContractAddress(contractAddress: string) {
        await this.contractAddressTextField.fill(contractAddress);
    }

    async getTokenSymbol(tokenSymbol: string): Promise<string> {
        return await this.page.getByText(`Symbol · ${tokenSymbol}`).textContent();
    }

    async clickOnAddTokenButton() {
        await this.addTokenButton.waitFor({ state: 'visible' })
        await this.addTokenButton.click();
    }

}