import { MyBucketlistServicePage } from './app.po';

describe('my-bucketlist-service App', () => {
  let page: MyBucketlistServicePage;

  beforeEach(() => {
    page = new MyBucketlistServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
