import * as BookActions from './book.actions';
import { Book } from './book.model';

const initialState: Book[] = [];

export function BookReducer(state: Book[] = initialState, action: BookActions.BookActionType) {
  switch (action.type) {
    case BookActions.ADD_BOOK: {
      return [
        ...state,
        {
          id: action.id,
          title: action.book.title,
          category: action.book.category,
          description: action.book.description,
        }
      ];
    }

    default: {
      return state;
    }
  }
}
