import { FePage } from './app.po';

describe('fe App', () => {
  let page: FePage;

  beforeEach(() => {
    page = new FePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
