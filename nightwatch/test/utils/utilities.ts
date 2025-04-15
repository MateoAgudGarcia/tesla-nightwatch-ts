import { NightwatchAPI } from 'nightwatch';

/**
 * Verifies the last test result and refreshes the page if the test fails.
 *
 * @param {NightwatchAPI} browser - The NightwatchAPI instance to interact with the browser.
 * @param {string} url - The URL to validate against the current page.
 */
export async function verifyLastTestOrRefresh(
  browser: NightwatchAPI,
  url: string,
): Promise<void> {
  await browser.validateAndRedirect(url); // Llama al comando personalizado 'validateAndRedirect'

  if (browser.currentTest.results.failed > 0) {
    const currentUrl = await browser.getCurrentUrl();
    if (currentUrl.includes(url)) {
      await browser.refresh();
    } else {
      await browser.navigateTo(url);
    }
  }
}
