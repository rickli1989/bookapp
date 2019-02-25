import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { empty } from 'rxjs';
import { of } from 'rxjs';
import { CategoryEnum } from './book.types';

import { BookService } from '../../app/app.component.service';
import * as bookEffects from './book.effects';
import * as bookActions from './book.actions';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('BooksEffects', () => {
  let actions$: TestActions;
  let service: BookService;
  let effects: bookEffects.BookEffects;

  const books = [
    {
      id: '1',
      title: 'test',
      description: 'test',
      category: CategoryEnum.sport
    },
    {
      id: '2',
      title: 'test1',
      description: 'test1',
      category: CategoryEnum.comedy
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookService,
        bookEffects.BookEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(BookService);
    effects = TestBed.get(bookEffects.BookEffects);

    spyOn(service, 'loadBooks').and.returnValue(of(books));
    spyOn(service, 'createBook').and.returnValue(of(books[0]));
  });

  describe('loadBooks$', () => {
    it('should return a collection from PopulateBookSuccess', () => {
      const action = new bookActions.PopulateBooksAction();
      const completion = new bookActions.PopulateBooksActionSuccess(books);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadBooks$).toBeObservable(expected);
    });
  });

  describe('createBook$', () => {
    it('should work', () => {
      const action = new bookActions.AddBookAction(books[0]);
      const completion = new bookActions.AddBookActionSuccess(books[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createBook$).toBeObservable(expected);
    });
  });

});
