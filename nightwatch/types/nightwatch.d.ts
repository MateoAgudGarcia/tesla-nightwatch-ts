import {
  NightwatchAssertionsResult,
  NightwatchNodeAssertionsResult,
  ScopedElement,
} from 'nightwatch';
import 'nightwatch';

declare module 'nightwatch' {
  interface NightwatchCustomCommands {
    /**
     * Validate if the URL contains a substring
     * @param {string} url Base URL to validate
     * @param {string} component Component to use
     * @returns
     */
    verifyUrlContains(
      url: string,
      component: string,
    ): Awaitable<this, NightwatchAssertionsResult<string>>;

    /**
     * Scroll to the image and verify that it is visible
     * @param {Definition} selector Selector to use
     */
    scrollIntoView(selector: Definition): Awaitable<this, null>;

    /**
     * Switch to window tab with a parameter
     * @param {number} tab Tab number
     */
    switchToWindowTab(
      tab: number,
    ): Awaitable<this, NightwatchNodeAssertionsResult | Error>;

    /**
     * Wait until an element is enabled
     * @param {Definition} selector Selector to use
     * @param {string} component Component to use
     */
    waitUntilElementIsEnabled(
      selector: Definition,
      component: string,
    ): Awaitable<this, ElementResult[] | Error>;

    /**
     * Verify if there is more than 1 window
     * @param {boolean} multipleWindows Multiple windows or not
     */
    verifyMultipleWindows(
      multipleWindows?: boolean,
    ): Awaitable<this, NightwatchNodeAssertionsResult | Error>;

    /**
     * Returns the closest element, following the existing method in JS
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
     * @param {string} childLocator Child selector in CSS
     * @param {string} parentLocator Child selector in CSS
     */
    closestElement(
      childLocator: string,
      parentLocator: string,
    ): Awaitable<this, ScopedElement>;

    /**
     * Returns a CSS Selector based on an index as string
     * @param {string} selector CSS Selector
     * @param {number} index Index of the array
     */
    elementByIndex(selector: string, index: number): Awaitable<this, string>;

    /**
     * Get text array by elements
     * @param {string} selector CSS Selector as string
     */
    getTextArrayByElements(selector: string): Awaitable<this, string[]>;

    /**
     * Scroll down by 100 pixels to avoid overlaps
     */
    scrollDown(): Awaitable<this, void>;

    /**
     * Scroll up by 100 pixels to avoid overlaps
     */
    scrollUp(): Awaitable<this, void>;

    /**
     * Checks if the current URL matches the expected URL.
     * Redirects to the expected URL if they do not match.
     *
     * @param expectedUrl - The correct URL to validate against.
     */
    validateAndRedirect(expectedUrl: string): Awaitable<void>;
  }
}
