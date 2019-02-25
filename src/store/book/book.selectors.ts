import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { Book } from './book.model';

export const getState = (state: State) => state;
export const getBooks = (state: State) => state.books;

export const getBooksCount = createSelector(getBooks, (books: Book[]) => {
  return books.length;
});
