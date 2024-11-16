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

const richTextCommands = {
  /**
   * Scroll to the component
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  scrollComponentIntoView(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, null> {
    return this.scrollIntoView('@textCaption');
  },
  /**
   * Validate if the rich text is displayed
   * @param {EnhancedSectionInstance} this
   * @returns
   */
  assertRichTextIsDisplayed(
    this: EnhancedSectionInstance,
  ): Awaitable<EnhancedSectionInstance, NightwatchAssertionsResult<boolean>> {
    return this.waitForElementVisible(
      '@textCaption',
      'Wait for rich text to be displayed',
    ).assert.visible('@textCaption', 'Validate if rich text is displayed');
  },
} satisfies SectionCommands;

const richTextElements = {
  textCaption: {
    selector: 'p.tds-text--caption',
  },
} satisfies SectionElements;

const root = `section.${Components.RICH_TEXT}`;

function richTextSection(index?: number) {
  return {
    selector: index ? `div.block:nth-of-type(${index}) > ${root}` : root,
    elements: richTextElements,
    commands: [richTextCommands],
  } satisfies SectionProperties;
}

export function richText(index?: number) {
  return {
    richText: richTextSection(index),
  } satisfies Sections;
}
