import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../../store';
import * as BookActions from './../../store/book/book.actions';
import { Book } from './../../store/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(
    private store: Store<State>,
  ) {
    this.populateBooks();
    this.updateBooks();
  }

  ngOnInit() {
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
        this.books = books;
        localStorage.setItem('ngrx-book-list', JSON.stringify(books));
      });
  }

}
