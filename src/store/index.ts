import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { Book } from './book/book.model';
import { BookReducer } from './book/book.reducer';

export interface State {
  books: Book[];
}

export const reducers: ActionReducerMap<State> = {
  books: BookReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
