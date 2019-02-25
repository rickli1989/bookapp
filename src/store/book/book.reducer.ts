import * as BookActions from './book.actions';
import { Book } from './book.model';

const initialState: Book[] = [];

export function BookReducer(state: Book[] = initialState, action: BookActions.BookActionType) {
  switch (action.type) {
    case BookActions.ADD_BOOK_SUCCESS: {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          category: action.payload.category,
          description: action.payload.description,
        }
      ];
    }

    case BookActions.POPULATE_BOOKS_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
