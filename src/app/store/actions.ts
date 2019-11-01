import { createAction, props, Store } from '@ngrx/store';
import { Book } from '../models/book-model';

export const getBooks = createAction('Get Books from external server');

export const getBooksSuccess = createAction(
  'Get Books from external server Success',
  props<{ books: Book[] }>()
);

export const getBooksFail = createAction('Get Books from external server Fail');

export const addBook = createAction('Add Book', props<{ book: Book }>());

export const addBookSuccess = createAction(
  'Add Book Success',
  props<{ book: Book }>()
);

export const addBookFail = createAction('Add Book Fail');
