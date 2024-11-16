import { NightwatchClient, NightwatchNodeAssertionsResult } from 'nightwatch';

export default class VerifyMultipleWindows {
  async command(
    this: NightwatchClient,
    multipleWindows: boolean = true,
  ): Promise<NightwatchNodeAssertionsResult | Error> {
    const windows: string[] = await this.api.window.getAllHandles();
    return this.api.verify.equal(
      windows.length > 0,
      multipleWindows,
      'Verify if there is more than 1 window',
    );
  }
}
