import { NightwatchClient, NightwatchNodeAssertionsResult } from 'nightwatch';

export default class SwitchToWindowTab {
  async command(
    this: NightwatchClient,
    tab: number,
  ): Promise<NightwatchNodeAssertionsResult | Error> {
    const windows: string[] = await this.api.window.getAllHandles();
    await this.api.window.switchTo(windows[tab]);
    const currentWindow = await this.api.window.getHandle();
    return this.api.verify.equal(
      currentWindow,
      windows[tab],
      `Window is switched to tab number: ${tab}`,
    );
  }
}
