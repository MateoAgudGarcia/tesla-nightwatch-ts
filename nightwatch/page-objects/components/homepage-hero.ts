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
  buttonGroupHorizontal,
  buttonGroupVertical,
  imageNested,
} from './nested-components';

const homepageHeroCommands = {
  /**
   * Scroll to the component
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  scrollComponentIntoView(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, null> {
    return this.scrollIntoView('@buttonsDesktop');
  },
  /**
   * Validate if the hero content is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertHeroContentIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@heroContent',
      'Wait for hero content to be displayed',
    ).assert.visible('@heroContent', 'Validate if hero content is displayed');
  },
  /**
   * Validate if the heading is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertHeadingIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@heading',
      'Wait for heading to be displayed',
    ).assert.visible('@heading', 'Validate if heading is displayed');
  },
  /**
   * Validate if the title subcopy is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertTitleSubcopyIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@titleSubcopy',
      'Wait for title subcopy to be displayed',
    ).assert.visible('@titleSubcopy', 'Validate if title subcopy is displayed');
  },
  /**
   * Validate if the subcopy is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertSubcopyIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@subcopy',
      'Wait for subcopy to be displayed',
    ).assert.visible('@subcopy', 'Validate if subcopy is displayed');
  },
  /**
   * Validate if the end of content is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertEndContentIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@contentEnd',
      'Wait for end of content to be displayed',
    ).assert.visible('@contentEnd', 'Validate if end of content is displayed');
  },
  /**
   * Validate if the buttons is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertButtonsDesktopIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@buttonsDesktop',
      'Wait for buttons to be displayed',
    ).assert.visible('@buttonsDesktop', 'Validate if buttons are displayed');
  },
} satisfies SectionCommands;

const homepageHeroElements = {
  heroContent: {
    selector: 'div.tcl-homepage-hero__content',
  },
  heading: {
    selector: 'h1.tcl-homepage-hero__heading',
  },
  titleSubcopy: {
    selector: 'h3.tcl-homepage-hero__subcopy:nth-of-type(1)',
  },
  subcopy: {
    selector: 'p.tcl-hero__subcopy:nth-of-type(1)',
  },
  contentEnd: {
    selector: 'div.tcl-homepage-hero__content-end',
  },
  buttonsDesktop: {
    selector: 'div.tcl-homepage-hero__buttons-on-desktop',
  },
} satisfies SectionElements;

const root = `section.${Components.HERO_HOMEPAGE}`;

function homepageHeroSection(index?: number) {
  return {
    selector: index ? `div.block:nth-of-type(${index}) > ${root}` : root,
    elements: homepageHeroElements,
    commands: [homepageHeroCommands],
    sections: {
      ...buttonGroupHorizontal(),
      ...buttonGroupVertical(),
      ...imageNested()
    },
  } satisfies SectionProperties;
}

export function homepageHero(index?: number) {
  return {
    homepageHero: homepageHeroSection(index),
  } satisfies Sections;
}
