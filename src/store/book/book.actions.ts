import { Action } from '@ngrx/store';
import { Book } from './book.model';
import uuid from 'uuid/v4';
import { CategoryEnum } from './book.types';

export const ADD_BOOK = '[Book] add';
export const ADD_BOOK_FAIL = '[Book] add fail';
export const ADD_BOOK_SUCCESS = '[Book] add success';
export const POPULATE_BOOKS = '[Book] populate';
export const POPULATE_BOOKS_FAIL = '[Book] populate Fail';
export const POPULATE_BOOKS_SUCCESS = '[Products] populate success';

export class AddBookAction implements Action {
  readonly type = ADD_BOOK;
  public id: string;

  constructor(
    public payload: Book
  ) {
    this.id = uuid();
  }
}

export class AddBookActionFail implements Action {
  readonly type = ADD_BOOK_FAIL;
  constructor(public payload: any) { }
}

export class AddBookActionSuccess implements Action {
  readonly type = ADD_BOOK_SUCCESS;
  constructor(public payload: Book) { }
}


export class PopulateBooksAction implements Action {
  readonly type = POPULATE_BOOKS;
}

export class PopulateBooksActionFail implements Action {
  readonly type = POPULATE_BOOKS_FAIL;
  constructor(public payload: any) { }
}

export class PopulateBooksActionSuccess implements Action {
  readonly type = POPULATE_BOOKS_SUCCESS;
  constructor(public payload: Book[]) { }
}


export type BookActionType =
  AddBookAction |
  AddBookActionSuccess |
  AddBookActionFail |
  PopulateBooksAction |
  PopulateBooksActionSuccess |
  PopulateBooksActionFail;
