import {Page} from "@playwright/test";

export class SwapConfirmPage {
    constructor(private page: Page) {
    }

    readonly rejectButton = this.page.getByRole('button', {name: 'Reject'});
    readonly confirmButton = this.page.getByRole('button', {name: 'Confirm'});
}