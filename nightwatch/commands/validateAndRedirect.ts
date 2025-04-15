import { NightwatchClient } from 'nightwatch';

export default class ValidateAndRedirect {
  async command(this: NightwatchClient, expectedUrl: string): Promise<void> {
    const actualUrl = await this.api.getCurrentUrl();
    if (!actualUrl.includes(expectedUrl)) {
      await this.api.navigateTo(expectedUrl);
    }
  }
}
