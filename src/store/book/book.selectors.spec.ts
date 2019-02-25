import * as BookSelector from './book.selectors';
import { State } from '../index';
import { Book } from './book.model';
import { CategoryEnum } from './book.types';
describe('Redux: BookSelector', () => {

  describe('Test for getState', () => {

    it('should return the state', () => {
      const state: State = {
        books: []
      };
      const rta = BookSelector.getState(state);
      expect(rta).toEqual(state);
    });

  });

  describe('Test for getBooks', () => {

    it('should return the books', () => {
      const state: State = {
        books: []
      };
      const rta = BookSelector.getBooks(state);
      expect(rta).toEqual(state.books);
    });

  });

  describe('Test for getBooksCount', () => {

    it('should return books length of 1', () => {
      const state = {
        books: [
          {
            id: '122',
            title: 'testNew',
            description: 'testNew',
            category: CategoryEnum.comedy
          }
        ],
        filter: 'SHOW_ALL'
      };
      const rta = BookSelector.getBooksCount(state);
      expect(rta).toEqual(1);
    });

  });

});
