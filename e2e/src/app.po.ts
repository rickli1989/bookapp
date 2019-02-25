import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  clickAdd() {
    browser.actions().click(element(by.id('addBook'))).perform();
  }

  addBook() {
    browser.element(by.name('title')).sendKeys('Test');
    browser.element(by.name('category')).sendKeys('sport');
    browser.element(by.name('description')).sendKeys('Test');
    browser.actions().click(element(by.id('saveBtn'))).perform();
  }

  getBookList() {
    return element.all(by.css('.bookItem')).count();
  }
}
