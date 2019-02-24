import { Action } from '@ngrx/store';
import { Book } from './book.model';
import uuidv4 from 'uuid/v4';
import { CategoryEnum } from './book.types';

export const ADD_BOOK = '[Book] add';
export const POPULATE_BOOKS = '[Book] populate';

export class AddBookAction implements Action {
  readonly type = ADD_BOOK;
  public id: number;

  constructor(
    public title: string,
    public category: CategoryEnum,
    public description: string,
  ) {
    this.id = uuidv4();
  }
}

export class PopulateBooksAction implements Action {
  readonly type = POPULATE_BOOKS;

  constructor(
    public Books: Book[]
  ) { }
}

export type BookActionType =
  AddBookAction |
  PopulateBooksAction;
