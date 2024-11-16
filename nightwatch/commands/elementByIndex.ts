import { NightwatchClient } from 'nightwatch';

export default class ElementByIndex {
  async command(
    this: NightwatchClient,
    selector: string,
    index: number,
  ): Promise<string> {
    return this.api.executeScript(
      (element: string, indexElement: number) => {
        const nodeList: NodeListOf<HTMLElement> =
          document.querySelectorAll(element)!;

        const elements = Array.from(nodeList);

        function elemToSelector(elem: HTMLElement): string {
          const { tagName, id, className, parentElement } = elem;
          let str = '';
          if (id !== '' && id.match(/^[a-z].*/)) {
            str += `#${id}`;
            return str;
          }
          str = tagName;
          if (className) {
            str +=
              '.' +
              className
                .replace(/(^\s)/gm, '')
                .replace(/(\s{2,})/gm, ' ')
                .split(/\s/)
                .join('.');
          }
          const needNthPart = (el: HTMLElement): boolean => {
            let sib = el.previousElementSibling;
            if (!el.className) {
              return true;
            }
            while (sib) {
              if (el.className !== sib.className) {
                return false;
              }
              sib = sib.previousElementSibling;
            }
            return true;
          };
          const getNthPart = (el: HTMLElement): string => {
            let childIndex = 1;
            let sib = el.previousElementSibling;
            while (sib) {
              childIndex += 1;
              sib = sib.previousElementSibling;
            }
            return `:nth-child(${childIndex})`;
          };
          if (needNthPart(elem)) {
            str += getNthPart(elem);
          }
          if (!parentElement) {
            return str;
          }
          return `${elemToSelector(parentElement)} > ${str}`;
        }

        return elemToSelector(elements[indexElement]);
      },
      [selector, index],
    );
  }
}
