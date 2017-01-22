import { COMXPage } from './app.po';

describe('comx App', function() {
  let page: COMXPage;

  beforeEach(() => {
    page = new COMXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
