import { TestBed } from '@angular/core/testing';

import { BookService } from './app.component.service';

describe('App.ComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
