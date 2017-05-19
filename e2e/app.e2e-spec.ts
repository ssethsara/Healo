import { HealoAppPage } from './app.po';

describe('healo-app App', function() {
  let page: HealoAppPage;

  beforeEach(() => {
    page = new HealoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
