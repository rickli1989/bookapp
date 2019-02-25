import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be able to click add book button', () => {
    page.navigateTo();
    page.clickAdd();
  });

  it('should be able to fill data', () => {
    page.addBook();
  });

  it('book list section should have book', () => {
    browser.waitForAngular();
    browser.driver.sleep(1000);
    const bookList = page.getBookList();
    expect(bookList).toEqual(1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
