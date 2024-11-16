import { Definition, NightwatchClient } from 'nightwatch';

export default class ScrollIntoView {
  async command(this: NightwatchClient, selector: Definition): Promise<null> {
    return this.api.moveToElement(selector, 0, 0);
  }
}
