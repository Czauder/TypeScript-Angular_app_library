import { createReducer, on } from '@ngrx/store';

import {
  getBooks,
  getBooksFail,
  getBooksSuccess,
  addBook,
  addBookSuccess,
  addBookFail,
  getUsers,
  getUsersSuccess,
  getUsersFail,
  deleteBook,
  deleteBookSuccess,
  deleteBookFail
} from './actions';
import { initialState, isLoading } from './state';

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
  on(addBookFail, state => ({ ...state, isLoading: false })),
  on(deleteBook, state => ({ ...state, isLoading: true })),
  on(deleteBookSuccess, (state) => ({
    ...state,
    Books: state.Books.filter(book => book.id === -1),
    isLoading: false
  })),
  on(deleteBookFail, state => ({ ...state, isLoading: false })),
  on(getUsers, state => ({ ...state, isLoading: true })),
  on(getUsersSuccess, (state, payload) => ({
    ...state,
    Users: payload.users,
    isLoading: false
  })),
  on(getUsersFail, state => ({ ...state, isLoading: false }))
);
