import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { State } from './../store';
import { Book } from './../store/book/book.model';
import * as BookActions from './../store/book/book.actions';
import { BookAddComponent } from './book-add/book-add.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BookApp';

  constructor(
    private store: Store<State>,
    private dialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.dialog.open(BookAddComponent, {
      width: '80%',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      const action = new BookActions.AddBookAction(result);
      this.store.dispatch(action);
    });
  }

}
