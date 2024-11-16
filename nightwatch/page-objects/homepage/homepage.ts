import { EnhancedPageObject, PageObjectModel } from 'nightwatch';
import { layoutConstrained, layoutOneColumn } from '../components/utils';
import { homepageHero, richText } from '../components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const empty = {};

const homepage = {
  sections: {
    secondLayout: {
      selector: layoutOneColumn(2),
      sections: {
        ...homepageHero(1),
      },
    },
    thirdLayout: {
      selector: layoutConstrained(3),
      sections: {
        ...richText(),
      },
    },
  },
} satisfies PageObjectModel;

export default homepage;

export type Homepage = EnhancedPageObject<
  typeof empty,
  typeof empty,
  typeof homepage.sections
>;

declare module 'nightwatch' {
  interface NightwatchCustomPageObjects {
    homepage(): Homepage;
  }
}
