import {
  Awaitable,
  ElementResult,
  EnhancedSectionInstance,
  NightwatchAssertionsResult,
  SectionProperties,
} from 'nightwatch';
import { SectionCommands, SectionElements, Sections } from '../utils';

const regex = new RegExp(/^(?<filename>.*\.(png|gif|jpg|jpeg|svg))$/i);

const imageNestedCommands = {
  /**
   * Scroll to the component
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  scrollComponentIntoView(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, null> {
    return this.scrollIntoView('@generalImage');
  },
  /**
   * Validate if the image is displayed and and contains correct formatting
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertImage(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<string>> {
    return this.waitForElementVisible(
      '@generalImage',
      'Wait for image to be displayed',
    )
      .assert.visible('@generalImage', 'Validate if image to be displayed')
      .assert.attributeMatches(
        '@generalImage',
        'src',
        regex,
        'Validate if the image the correct format',
      );
  },
  /**
   * Validate if the image is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertImageIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@generalImage',
      'Wait for image to be displayed',
    ).assert.visible('@generalImage', 'Validate if image to be displayed');
  },
  /**
   * Validate if the image is present and and contains correct formatting
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertPortraitAndLandscapeImage(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<string>> {
    return this.waitForElementPresent(
      '@portraitAndLandscape',
      'Wait for portrait and landscape image to be present',
    )
      .assert.elementPresent(
        '@portraitAndLandscape',
        'Validate if portrait and landscape image to be present',
      )
      .assert.attributeMatches(
        '@portraitAndLandscape',
        'srcset',
        regex,
        'Validate if the portrait and landscape image the correct format',
      );
  },
  /**
   * Validate if the image is present
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertPortraitAndLandscapeImageIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<
    EnhancedSectionInstance,
    NightwatchAssertionsResult<ElementResult[]>
  > {
    return this.waitForElementPresent(
      '@portraitAndLandscape',
      'Wait for portrait and landscape image to be present',
    ).assert.elementPresent(
      '@portraitAndLandscape',
      'Validate if portrait and landscape image to be present',
    );
  },
  /**
   * Validate if the image is present and and contains correct formatting
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertLandscapeImage(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<string>> {
    return this.waitForElementPresent(
      '@landscape',
      'Wait for landscape image to be present',
    )
      .assert.elementPresent(
        '@landscape',
        'Validate if landscape image to be present',
      )
      .assert.attributeMatches(
        '@landscape',
        'srcset',
        regex,
        'Validate if the landscape image the correct format',
      );
  },
  /**
   * Validate if the image is present
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertLandscapeImageIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<
    EnhancedSectionInstance,
    NightwatchAssertionsResult<ElementResult[]>
  > {
    return this.waitForElementPresent(
      '@landscape',
      'Wait for landscape image to be present',
    ).assert.elementPresent(
      '@landscape',
      'Validate if landscape image to be present',
    );
  },
  /**
   * Validate if the image is present and and contains correct formatting
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertPortraitImage(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<string>> {
    return this.waitForElementPresent(
      '@portrait',
      'Wait for portrait image to be present',
    )
      .assert.elementPresent(
        '@portrait',
        'Validate if portrait image to be present',
      )
      .assert.attributeMatches(
        '@portrait',
        'srcset',
        regex,
        'Validate if the portrait image the correct format',
      );
  },
  /**
   * Validate if the image is present
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertPortraitImageIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<
    EnhancedSectionInstance,
    NightwatchAssertionsResult<ElementResult[]>
  > {
    return this.waitForElementPresent(
      '@portrait',
      'Wait for portrait image to be present',
    ).assert.elementPresent(
      '@portrait',
      'Validate if portrait image to be present',
    );
  },
} satisfies SectionCommands;

const imageNestedElements = {
  portraitAndLandscape: {
    selector: 'source:nth-of-type(1)',
  },
  landscape: {
    selector: 'source:nth-of-type(2)',
  },
  portrait: {
    selector: 'source:nth-of-type(3)',
  },
  generalImage: {
    selector: 'img',
  },
} satisfies SectionElements;

const root = 'picture.tcl-image__picture';

function imageNestedSection(index?: number) {
  return {
    selector: index ? `${root}:nth-of-type(${index})` : root,
    elements: imageNestedElements,
    commands: [imageNestedCommands],
  } satisfies SectionProperties;
}

export function imageNested(index?: number) {
  return {
    imageNested: imageNestedSection(index),
  } satisfies Sections;
}
