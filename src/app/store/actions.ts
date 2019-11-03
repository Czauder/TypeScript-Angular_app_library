import { createAction, props, Store } from '@ngrx/store';
import { Book } from '../models/book-model';
import { User } from '../models/user-model';

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

export const deleteBook = createAction('Delete book', props<{book: Book}>());
export const deleteBookSuccess = createAction('Delete book Success', props<{book: Book}>());
export const deleteBookFail = createAction('Delete book Fail');


// for future 
export const getUsers = createAction('Get Users from external server');
export const getUsersSuccess = createAction(
  'Get Users from external server Success',
  props<{ users: User[]}>()
);
export const getUsersFail = createAction('Get Users from external server Fail');
