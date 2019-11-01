import { createReducer, on } from '@ngrx/store';

import {
  getBooks,
  getBooksFail,
  getBooksSuccess,
  addBook,
  addBookSuccess,
  addBookFail
} from './actions';
import { initialState } from './state';

export const booksReducer = createReducer(
  initialState,
  on(getBooks, state => ({ ...state, isLoading: true })),
  on(getBooksSuccess, (state, payload) => ({
    ...state,
    Books: payload.books,
    isLoading: false
  })),
  on(getBooksFail, state => ({ ...state, isLoading: false })),
  on(addBook, state => ({ ...state, isLoading: true })),
  on(addBookSuccess, (state, payload) => ({
    ...state,
    Books: [...state.Books, payload.book],
    isLoading: false
  })),
  on(addBookFail, state => ({ ...state, isLoading: false }))
);
