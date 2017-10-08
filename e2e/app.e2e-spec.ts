import { ClickerClientPage } from './app.po';

describe('clicker-client App', () => {
  let page: ClickerClientPage;

  beforeEach(() => {
    page = new ClickerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
