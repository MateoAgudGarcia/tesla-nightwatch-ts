import {
  Awaitable,
  EnhancedSectionInstance,
  NightwatchAssertionsResult,
  SectionProperties,
} from 'nightwatch';
import { SectionCommands, SectionElements, Sections } from '../utils';

enum ButtonGroup {
  VERTICAL = 'section.tcl-button-group--type-vertical',
  HORIZONTAL = 'section.tcl-button-group--type-horizontal',
  SINGLE_BUTTON = 'section.tcl-button-group--single-button',
}

const buttonGroupCommands = {
  /**
   * Scroll to the component
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  scrollComponentIntoView(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, null> {
    return this.scrollIntoView('@secondaryButton');
  },
  /**
   * Click primary button and validate url
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  async clickPrimaryButton(
    this: EnhancedSectionInstance,
  ): Promise<NightwatchAssertionsResult<string>> {
    const originalUrl = await this.api.getCurrentUrl();
    return this.waitUntilElementIsEnabled(
      '@primaryButton',
      'Primary button',
    )
      .click('@primaryButton')
      .assert.not.urlEquals(
        originalUrl,
        'Verify if URL was redirected to another page',
      )
      .api.back()
      .assert.urlEquals(
        originalUrl,
        'Verify if the page returned to its original url',
      );
  },
  /**
   * Click secondary button and validate url
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  async clickSecondaryButton(
    this: EnhancedSectionInstance,
  ): Promise<NightwatchAssertionsResult<string>> {
    const originalUrl = await this.api.getCurrentUrl();
    return this.waitUntilElementIsEnabled(
      '@secondaryButton',
      'Secondary button',
    )
      .click('@secondaryButton')
      .assert.not.urlEquals(
        originalUrl,
        'Verify if URL was redirected to another page',
      )
      .api.back()
      .assert.urlEquals(
        originalUrl,
        'Verify if the page returned to its original url',
      );
  },
  /**
   * Click tertiary button and validate url
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  async clickTertiaryButton(
    this: EnhancedSectionInstance,
  ): Promise<NightwatchAssertionsResult<string>> {
    const originalUrl = await this.api.getCurrentUrl();
    return this.waitUntilElementIsEnabled('@tertiaryButton', 'Tertiary button')
      .click('@tertiaryButton')
      .assert.not.urlEquals(
        originalUrl,
        'Verify if URL was redirected to another page',
      )
      .api.back()
      .assert.urlEquals(
        originalUrl,
        'Verify if the page returned to its original url',
      );
  },
} satisfies SectionCommands;

const buttonGroupElements = {
  primaryButton: {
    selector: 'a.tcl-button--primary',
  },
  secondaryButton: {
    selector: 'a.tcl-button--secondary',
  },
  tertiaryButton: {
    selector: 'a.tcl-button--tertiary',
  },
} satisfies SectionElements;

function buttonGroupSection(selector: ButtonGroup) {
  return {
    selector,
    elements: buttonGroupElements,
    commands: [buttonGroupCommands],
  } satisfies SectionProperties;
}

export function buttonGroupVertical() {
  return {
    buttonGroupVertical: buttonGroupSection(ButtonGroup.VERTICAL),
  } satisfies Sections;
}

export function buttonGroupHorizontal() {
  return {
    buttonGroupHorizontal: buttonGroupSection(ButtonGroup.HORIZONTAL),
  } satisfies Sections;
}

export function buttonGroupSingleButton() {
  return {
    buttonGroupSingleButton: buttonGroupSection(ButtonGroup.SINGLE_BUTTON),
  } satisfies Sections;
}
