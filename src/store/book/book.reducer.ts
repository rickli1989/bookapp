import { Book } from './book.model';
import * as BookActions from './book.actions';

const initialState: Book[] = [];

export function BookReducer(state: Book[] = initialState, action: BookActions.BookActionType) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
