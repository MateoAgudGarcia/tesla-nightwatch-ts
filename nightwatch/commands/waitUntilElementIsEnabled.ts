import { Definition, ElementResult, NightwatchClient } from 'nightwatch';

export default class WaitUntilElementIsEnabled {
  async command(
    this: NightwatchClient,
    selector: Definition,
    component: string,
  ): Promise<ElementResult[] | Error> {
    return this.api
      .waitUntil(async () => {
        return browser.isEnabled(selector);
      })
      .waitForElementPresent(
        selector,
        `Wait for ${component} to be enabled and present`,
      );
  }
}
