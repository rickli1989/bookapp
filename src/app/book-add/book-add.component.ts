import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CategoryEnum } from '../../store/book/book.types';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  bookForm = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.maxLength(30)
    ]],
    category: ['', Validators.required],
    description: ['', Validators.required],
  });
  values = [];
  constructor(
    public dialogRef: MatDialogRef<BookAddComponent>,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.values = Object.keys(CategoryEnum).filter(f => isNaN(Number(f)));
    console.log(this.values);
  }

  onCancelClick(): void {
    console.log(this.bookForm);
    this.dialogRef.close();
  }

}
