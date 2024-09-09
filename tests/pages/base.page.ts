import { Page } from 'playwright';

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  public async getTitle(): Promise<string> {
    return await this.page.title();
  }

  public async getUrl(): Promise<string> {
    return await this.page.url();
  }

  public async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  public async type(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  public async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector);
  }
}