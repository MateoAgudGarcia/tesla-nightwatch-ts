import { EnhancedPageObject, PageObjectModel } from 'nightwatch';
import { layoutShowcase } from '../components/utils';
import { imageAdvanced } from '../components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const empty = {};

const solarRoof = {
  sections: {
    secondLayout: {
      selector: layoutShowcase(2),
      sections: {
        ...imageAdvanced(),
      },
    },
    thirdLayout: {
      selector: layoutShowcase(3),
      sections: {
        ...imageAdvanced(),
      },
    },
  },
} satisfies PageObjectModel;

export default solarRoof;

export type SolarRoof = EnhancedPageObject<
  typeof empty,
  typeof empty,
  typeof solarRoof.sections
>;

declare module 'nightwatch' {
  interface NightwatchCustomPageObjects {
    solar_roof(): SolarRoof;
  }
}
