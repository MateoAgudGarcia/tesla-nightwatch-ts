import { NightwatchClient } from 'nightwatch';

export default class ScrollIntoView {
  async command(this: NightwatchClient): Promise<void> {
    return (
      this.api
        // Time for waiting for scrolling into the section
        .pause(1000)
        .executeScript(async () => {
          window.scrollBy(0, -100);
        })
        // Time for waiting for executing the script
        .pause(1000)
    );
  }
}
