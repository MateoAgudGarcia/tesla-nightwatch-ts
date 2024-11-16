import {
  Awaitable,
  EnhancedSectionInstance,
  NightwatchAssertionsResult,
  SectionProperties,
} from 'nightwatch';
import { SectionCommands, SectionElements, Sections } from './../utils';
import {
  buttonGroupHorizontal,
  buttonGroupSingleButton,
  buttonGroupVertical,
} from './index';

enum HeaderGroup {
  VERTICAL = 'div.tcl-gallery-advanced__vertical-header-group',
  HORIZONTAL = 'div.tcl-gallery-advanced__horizontal-header-group',
}

const headerGroupCommands = {
  /**
   * Scroll to the component
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  scrollComponentIntoView(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, null> {
    return this.scrollIntoView('@base');
  },
  /**
   * Validate if the header group is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertHeaderGroupIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@base',
      'Wait for header group to be displayed',
    ).assert.visible('@base', 'Validate if header group is displayed');
  },
  /**
   * Validate if the header is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertHeaderIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@header',
      'Wait for header to be displayed',
    ).assert.visible('@header', 'Validate if header is displayed');
  },
  /**
   * Validate if the copy is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertCopyIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@copy',
      'Wait for copy to be displayed',
    ).assert.visible('@copy', 'Validate if copy is displayed');
  },
  /**
   * Validate if the buttons is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertGroupButtonsAreDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@groupButtons',
      'Wait for buttons to be displayed',
    ).assert.visible('@groupButtons', 'Validate if buttons is displayed');
  },
  /**
   * Validate if the buttons is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertAsideButtonsAreDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@asideButtons',
      'Wait for buttons to be displayed',
    ).assert.visible('@asideButtons', 'Validate if buttons is displayed');
  },
} satisfies SectionCommands;

const headerGroupElements = {
  base: {
    selector: 'section.tcl-section-header-group',
  },
  header: {
    selector: 'span.tcl-section-header-group__header',
  },
  copy: {
    selector: 'div.tcl-section-header-group__copy',
  },
  asideButtons: {
    selector: '.tds-layout-aside > div.tcl-section-header-group__buttons',
  },
  groupButtons: {
    selector: 'div.tcl-section-header-group__buttons',
  },
} satisfies SectionElements;

function headerGroupSection(selector: HeaderGroup) {
  return {
    selector,
    elements: headerGroupElements,
    commands: [headerGroupCommands],
    sections: {
      ...buttonGroupHorizontal(),
      ...buttonGroupVertical(),
      ...buttonGroupSingleButton(),
    },
  } satisfies SectionProperties;
}

export function headerGroupHorizontal() {
  return {
    headerGroupHorizontal: headerGroupSection(HeaderGroup.HORIZONTAL),
  } satisfies Sections;
}

export function headerGroupVertical() {
  return {
    headerGroupVertical: headerGroupSection(HeaderGroup.VERTICAL),
  } satisfies Sections;
}
