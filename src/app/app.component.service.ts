import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../store/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  createBook(book: Book) {
    console.log('Creating book: ');
    console.log(book);
    const books = JSON.parse(localStorage.getItem('ngrx-book-list'));
    localStorage.setItem('ngrx-book-list', JSON.stringify([...books, book]));
    return new BehaviorSubject(book);
  }

  loadBooks(): Observable<Book[]> {
    const books = localStorage.getItem('ngrx-book-list');
    return new BehaviorSubject(JSON.parse(books));
  }
}
