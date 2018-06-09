import { OilDistributionSystemPage } from './app.po';

describe('oil-distribution-system App', function() {
  let page: OilDistributionSystemPage;

  beforeEach(() => {
    page = new OilDistributionSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
