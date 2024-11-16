import { ExtendDescribeThis } from 'nightwatch';
import { Website } from '../utils/interfaces/website';

describe('Tesla - Homepage', function (this: ExtendDescribeThis<Website>) {
  this.websiteUrl = 'https://www.tesla.com/';

  const homepage = browser.page.homepage();

  // Layouts
  const secondLayout = homepage.section.secondLayout;
  const thirdLayout = homepage.section.thirdLayout;
  // Sections - Second Layout
  const homepageHero = secondLayout.section.homepageHero;
  const buttonGroup = homepageHero.section.buttonGroupHorizontal;
  const imageHero = homepageHero.section.imageNested;
  // Sections - Third Layout
  const richText = thirdLayout.section.richText;

  before(async function (this: ExtendDescribeThis<Website>) {
    await browser.navigateTo(this.websiteUrl!);
  });

  it('Homepage hero is working and contains the expected information', async () => {
    await homepageHero.scrollComponentIntoView();
    await homepageHero.assertHeroContentIsDisplayed();
    await homepageHero.assertHeadingIsDisplayed();
    await homepageHero.assertTitleSubcopyIsDisplayed();
    await homepageHero.assertSubcopyIsDisplayed();
    await homepageHero.assertEndContentIsDisplayed();
    await homepageHero.assertButtonsDesktopIsDisplayed();

    await buttonGroup.clickPrimaryButton();
    await buttonGroup.clickTertiaryButton();

    await imageHero.assertImage();
    await imageHero.assertPortraitImage();
    await imageHero.assertLandscapeImage();
    await imageHero.assertPortraitAndLandscapeImageIsDisplayed();
  });

  it('Rich text is correctly displayed', async () => {
    await richText.scrollComponentIntoView();
    await richText.assertRichTextIsDisplayed();
  });
});
