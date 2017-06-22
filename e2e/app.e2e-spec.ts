import { BasicAuthenticationProjPage } from './app.po';

describe('basic-authentication-proj App', () => {
  let page: BasicAuthenticationProjPage;

  beforeEach(() => {
    page = new BasicAuthenticationProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
