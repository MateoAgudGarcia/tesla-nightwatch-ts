import { PageObjectModel, SectionProperties } from 'nightwatch';

export type Sections = PageObjectModel['sections'];
export type SectionWithoutSelector = Omit<SectionProperties, 'selector'>;
export type SectionSelector = SectionProperties['selector'];
export type SectionCommands = SectionProperties['commands'];
export type SectionElements = SectionProperties['elements'];
