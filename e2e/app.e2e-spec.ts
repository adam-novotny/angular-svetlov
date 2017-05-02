import { SvetlovPage } from './app.po';

describe('svetlov App', () => {
  let page: SvetlovPage;

  beforeEach(() => {
    page = new SvetlovPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
