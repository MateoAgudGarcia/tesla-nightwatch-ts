import { NightwatchAllureReporter } from 'nightwatch-allure';
import fs from 'fs';
import os from 'os';
import process from 'process';

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

let chromeVersion;

// const US_REGION = '.tds-country--us > a';

export async function beforeEach(browser, done) {
  const capabilities = await browser.driver.getCapabilities();
  chromeVersion = capabilities.getBrowserVersion();

  await browser.window.setSize(1500, 1000);
  await browser.navigateTo('https://www.tesla.com/ ');
  // await browser.click(US_REGION);
  done();
}
export function afterEach(browser, done) {
  done();
}

function createEnvironmentProperties() {
  try {
    const osInfo = `${os.type()} ${os.release()}`;
    const osVersion = os.version();
    const nodeVersion = process.versions.node;

    const content = [
      `Node.Version=${nodeVersion}`,
      `Platform=${osInfo}`,
      `Os.Version=${osVersion}`,
      `Browser=${chromeVersion}`,
    ].join('\n');

    const allureResultsDir = 'allure-results';
    if (!fs.existsSync(allureResultsDir)) {
      fs.mkdirSync(allureResultsDir);
    }

    fs.writeFileSync(`${allureResultsDir}/environment.properties`, content);
  } catch (error) {
    throw new Error(
      'File environment.properties had not been generated',
      error,
    );
  }
}

export function after(done) {
  createEnvironmentProperties();
  done();
}
