/* eslint-disable no-undef */
import { NightwatchAllureReporter } from 'nightwatch-allure';

export const abortOnAssertionFailure = true;
export const waitForConditionPollInterval = 500;
export const waitForConditionTimeout = 15000;
export const abortOnElementLocateError = false;
export const throwOnMultipleElementsReturned = false;
export const suppressWarningsOnMultipleElementsReturned = false;
export const asyncHookTimeout = 15000;
export const unitTestsTimeout = 2000;
export const customReporterCallbackTimeout = 20000;
export const retryAssertionTimeout = 5000;
export const reuseBrowserSession = false;

export function reporter(results, done) {
  const reporter = new NightwatchAllureReporter({});
  reporter.write(results, done);
}

const US_REGION = '.tds-country--us > a';

export async function beforeEach(browser, done) {
  await browser.window.maximize();
  await browser.navigateTo('https://www.tesla.com/ ');
  await browser.click(US_REGION);
  done();
}
export function afterEach(browser, done) {
  done();
}
