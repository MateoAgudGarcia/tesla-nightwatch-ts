# Tesla - Nightwatch TS ![Status](https://github.com/MateoAgudGarcia/tesla-nightwatch-ts/actions/workflows/main-branch-deployment.yml/badge.svg) ![Status](https://github.com/MateoAgudGarcia/tesla-nightwatch-ts/actions/workflows/results-not-deployment.yml/badge.svg)

This repository contains an automation framework for UI testing of Tesla's **Homepage** and **Solar Page**. The pages are built using Drupal, and as per Drupal's recommendations, [Nightwatch.js](https://www.drupal.org/docs/develop/automated-testing/types-of-tests) is used for UI testing.

The framework is written in **TypeScript** and leverages **Nightwatch.js** for end-to-end (E2E) browser testing. Test reports are generated using [**Allure**](https://nightwatchjs.org/guide/reporters/use-nightwatch-allure-reporter.html), providing detailed HTML reports. This repository includes scripts to manage test reports locally.

### Last 20 builds deployed using GH Pages: [Tesla - Nightwatch TS - Github Page](https://mateoagudgarcia.github.io/tesla-nightwatch-ts)

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Folder Structure](#folder-structure)
- [Nightwatch Features](#nightwatch-features)
- [Useful Links](#useful-links)

## Getting Started

To run the tests locally, ensure you have the prerequisites set up and follow the installation instructions.

## Prerequisites

- **Node.js** version 20 or higher.
- **Chrome** browser (for running the UI tests).

## Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:MateoAgudGarcia/tesla-nightwatch-ts.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running Tests

To execute tests locally, you can use the following commands:

- **General tests**:
  ```bash
  npm run test:general
  ```
- **Homepage tests**:
  ```bash
  npm run test:homepage
  ```
- **Solar Page tests**:
  ```bash
  npm run test:solar
  ```

For more information about running and configuring tests, please refer to the [Nightwatch documentation](https://nightwatchjs.org/guide/running-tests/using-with-test-groups.html).

## Test Reports

This framework uses **Allure** to generate HTML reports in a local machine. The following shell scripts are available for managing reports:

- **Delete old reports**:
  ```bash
  ./delete_reports.sh
  ```
- **Generate new reports**:
  ```bash
  ./create_reports.sh
  ```

After running tests, use the scripts to clean up and generate fresh reports.
