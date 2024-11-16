import { NightwatchAssertionsResult, NightwatchClient } from 'nightwatch';

export default class VerifyUrlContains {
  async command(
    this: NightwatchClient,
    url: string,
    component: string,
  ): Promise<NightwatchAssertionsResult<string>> {
    return this.api.verify.urlContains(
      url,
      `Testing if the ${component} is on the page containing the URL: "${url}"`,
    );
  }
}
