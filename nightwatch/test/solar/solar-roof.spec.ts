import { ExtendDescribeThis } from 'nightwatch';
import { Website } from '../utils/interfaces/website';

describe('Tesla - Homepage', function (this: ExtendDescribeThis<Website>) {
  this.websiteUrl = 'https://www.tesla.com/solarroof';

  const homepage = browser.page.solar_roof();

  // Layouts
  const secondLayout = homepage.section.secondLayout;
  const thirdLayout = homepage.section.thirdLayout;
  // Sections - Second Layout
  const firstImageAdvanced = secondLayout.section.imageAdvanced;
  const horizontalHeaderGroup =
    firstImageAdvanced.section.headerGroupHorizontal;
  const singleButton = horizontalHeaderGroup.section.buttonGroupSingleButton;
  // Sections - Third Layout
  const secondImageAdvanced = thirdLayout.section.imageAdvanced;
  const verticalHeaderGroup = secondImageAdvanced.section.headerGroupVertical;
  const twoButtons = verticalHeaderGroup.section.buttonGroupHorizontal;

  before(async function (this: ExtendDescribeThis<Website>) {
    await browser.navigateTo(this.websiteUrl!);
  });

  it('First image advanced is working and contains the expected information', async () => {
    await firstImageAdvanced.scrollComponentIntoView();
    await firstImageAdvanced.assertImageAssetIsDisplayed();
    await firstImageAdvanced.assertHorizontalHeaderGroupIsDisplayed();

    await horizontalHeaderGroup.scrollComponentIntoView();
    await horizontalHeaderGroup.assertHeaderGroupIsDisplayed();
    await horizontalHeaderGroup.assertHeaderIsDisplayed();
    await horizontalHeaderGroup.assertCopyIsDisplayed();
    await horizontalHeaderGroup.assertAsideButtonsAreDisplayed();

    await singleButton.scrollComponentIntoView();
    await singleButton.clickSecondaryButton();
  });

  it('Second image advanced is working and contains the expected information', async () => {
    await secondImageAdvanced.scrollComponentIntoView();
    await secondImageAdvanced.assertImageAssetIsDisplayed();
    await secondImageAdvanced.assertVerticalHeaderGroupIsDisplayed();

    await verticalHeaderGroup.scrollComponentIntoView();
    await verticalHeaderGroup.assertHeaderGroupIsDisplayed();
    await verticalHeaderGroup.assertHeaderIsDisplayed();
    await verticalHeaderGroup.assertCopyIsDisplayed();
    await verticalHeaderGroup.assertGroupButtonsAreDisplayed();

    await twoButtons.scrollComponentIntoView();
    await twoButtons.clickSecondaryButton();
    await twoButtons.clickTertiaryButton();
  });
});
