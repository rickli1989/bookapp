import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { State } from './../store';
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
