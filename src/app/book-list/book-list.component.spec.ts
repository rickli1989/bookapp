import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../../store/index';
import { MatDialogModule } from '@angular/material/dialog';
describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        MatDialogModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
