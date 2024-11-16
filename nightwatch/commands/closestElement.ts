import { NightwatchClient, ScopedElement } from 'nightwatch';

export default class ClosestElement {
  async command(
    this: NightwatchClient,
    childLocator: string,
    parentLocator: string,
  ): Promise<ScopedElement> {
    const cssParent: string = await this.api.executeScript(
      (child: string, parent: string) => {
        const childSelector = document.querySelector(child)!;
        const parentSelector: HTMLElement = childSelector.closest(parent)!;

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

        return elemToSelector(parentSelector);
      },
      [childLocator, parentLocator],
    );
    const parent = cssParent;

    return this.api.element(parent);
  }
}
