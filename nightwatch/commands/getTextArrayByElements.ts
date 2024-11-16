import { NightwatchClient } from 'nightwatch';

export default class GetTextArrayByElements {
  async command(this: NightwatchClient, selector: string): Promise<string[]> {
    return this.api.executeScript(
      (element: string) => {
        const nodeList: NodeListOf<HTMLElement> =
          document.querySelectorAll(element)!;

        const elements = Array.from(nodeList);
        return elements.map((elm) => elm.textContent ?? '')!;
      },
      [selector],
    );
  }
}
