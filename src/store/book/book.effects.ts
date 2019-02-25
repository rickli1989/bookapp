import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { BookService } from '../../app/app.component.service';
import { Book } from './book.model';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions,
              private bookService: BookService
    ) { }

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType(bookActions.POPULATE_BOOKS),
    mergeMap(() =>
      this.bookService.loadBooks().pipe(
        map(books => {
          console.log(books);
          return (new bookActions.PopulateBooksActionSuccess(books));
        }),
        catchError(err => of(new bookActions.PopulateBooksActionFail(err)))
      )
    )
  );

  @Effect()
  createBook$: Observable<Action> = this.actions$.pipe(
    ofType(bookActions.ADD_BOOK),
    map((action: bookActions.AddBookAction) => {
      return {
        id: action.id,
        ...action.payload
      };
    }),
    switchMap((book: Book) =>
      this.bookService.createBook(book)
      .pipe(
        map(newBook => (new bookActions.AddBookActionSuccess(newBook))),
        catchError(err => of(new bookActions.AddBookActionFail(err)))
      )
    )
  );
}
