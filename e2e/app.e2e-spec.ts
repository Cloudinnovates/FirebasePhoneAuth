import { FirebasePhoneAuthPage } from './app.po';

describe('firebase-phone-auth App', () => {
  let page: FirebasePhoneAuthPage;

  beforeEach(() => {
    page = new FirebasePhoneAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
