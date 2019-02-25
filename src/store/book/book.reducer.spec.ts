import * as BooksAction from './book.actions';
import { BookReducer } from './book.reducer';
import { CategoryEnum } from './book.types';
describe('Redux: BookReducer', () => {

  it('should return a new state with new book: AddBookAction', () => {
    const action = new BooksAction.AddBookAction({
      id: '123',
      title: 'testNew',
      description: 'testNew',
      category: CategoryEnum.comedy
    });
    const oldState = [{
      id: '122',
      title: 'testOld',
      description: 'testOld',
      category: CategoryEnum.comedy
    }];
    const newState = BookReducer(oldState, action);
    expect(newState.length).toEqual(2);
    expect(newState[1].title).toEqual('testNew');
  });

  it('should return a new state with new books: PopulateBooksAction', () => {
    const newBooks = [{
      id: '122',
      title: 'testNew',
      description: 'testNew',
      category: CategoryEnum.comedy
    }];
    const action = new BooksAction.PopulateBooksAction(newBooks);
    const oldState = [{
      id: '121',
      title: 'testOld',
      description: 'testOld',
      category: CategoryEnum.comedy
    }];
    const newState = BookReducer(oldState, action);
    expect(newState.length).toEqual(1);
    expect(newState[0].title).toEqual('testNew');
  });

});
