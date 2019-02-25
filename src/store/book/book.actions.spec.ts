import * as BookActions from './book.actions';
import { CategoryEnum } from './book.types';
describe('Redux: BookActions', () => {
  describe('Test for AddBookAction', () => {
    it('should return an action with random id', () => {
      const action = new BookActions.AddBookAction({
        id: '123',
        title: 'test',
        description: 'test',
        category: CategoryEnum.comedy
      });
      expect(action.type).toEqual(BookActions.ADD_BOOK);
      expect(action.payload.title).toEqual('test');
    });

  });

  describe('Test for PopulateBooksAction', () => {
    it('should return an action with book', () => {
      const action = new BookActions.PopulateBooksAction([]);
      expect(action.type).toEqual(BookActions.POPULATE_BOOKS);
      expect(action.payload).toEqual([]);
    });

  });

});
