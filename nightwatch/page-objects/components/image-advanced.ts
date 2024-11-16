import {
  Awaitable,
  EnhancedSectionInstance,
  NightwatchAssertionsResult,
  SectionProperties,
} from 'nightwatch';
import {
  SectionCommands,
  SectionElements,
  Components,
  Sections,
} from './utils';
import {
  headerGroupHorizontal,
  headerGroupVertical,
} from './nested-components';

const imageAdvancedCommands = {
  /**
   * Scroll to the component
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  scrollComponentIntoView(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, null> {
    return this.scrollIntoView('@asset');
  },
  /**
   * Validate if the image is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertImageAssetIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@asset',
      'Wait for image asset to be displayed',
    ).assert.visible('@asset', 'Validate if image asset is displayed');
  },
  /**
   * Validate if the image is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertVerticalHeaderGroupIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@verticalHeaderGroup',
      'Wait for vertical header group to be displayed',
    ).assert.visible(
      '@verticalHeaderGroup',
      'Validate if vertical header group is displayed',
    );
  },
  /**
   * Validate if the image is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertHorizontalHeaderGroupIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@horizontalHeaderGroup',
      'Wait for horizontal header group to be displayed',
    ).assert.visible(
      '@horizontalHeaderGroup',
      'Validate if horizontal header group is displayed',
    );
  },
} satisfies SectionCommands;

const imageAdvancedElements = {
  asset: {
    selector: 'div.tcl-gallery-advanced__asset',
  },
  verticalHeaderGroup: {
    selector: 'div.tcl-gallery-advanced__vertical-header-group',
  },
  horizontalHeaderGroup: {
    selector: 'div.tcl-gallery-advanced__horizontal-header-group',
  },
} satisfies SectionElements;

const root = `section.${Components.IMAGE_ADVANCED}`;

function imageAdvancedSection(index?: number) {
  return {
    selector: index ? `div.block:nth-of-type(${index}) > ${root}` : root,
    elements: imageAdvancedElements,
    commands: [imageAdvancedCommands],
    sections: {
      ...headerGroupHorizontal(),
      ...headerGroupVertical(),
    },
  } satisfies SectionProperties;
}

export function imageAdvanced(index?: number) {
  return {
    imageAdvanced: imageAdvancedSection(index),
  } satisfies Sections;
}
