import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './../store';
import { Book } from './../store/book/book.model';
import * as BookActions from './../store/book/book.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BookApp';

  constructor(
    private store: Store<State>,
  ) {
    this.populateBooks();
    this.updateBooks();
  }

  private populateBooks() {
    const books: Book[] = JSON.parse(localStorage.getItem('ngrx-book-list') || '[]');
    console.log(books);
    this.store.dispatch(new BookActions.PopulateBooksAction(books));
  }

  private updateBooks() {
    this.store.select('books')
      .subscribe(books => {
        console.log(books);
        localStorage.setItem('ngrx-book-list', JSON.stringify(books));
      });
  }
}
