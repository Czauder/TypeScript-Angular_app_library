import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getBooks,
  getBooksSuccess,
  getBooksFail,
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
import { RestApiService } from '../services/rest-api.service';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BooksEffects {
  public getbooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBooks),
      switchMap(action => {
        return this.restApiService
          .getBooks()
          .pipe(
            map(
              res => getBooksSuccess({ books: res }),
              catchError(err => of(getBooksFail))
            )
          );
      })
    );
  });

  public addBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addBook),
      switchMap(action => {
        return this.restApiService
          .createBook(action.book)
          .pipe(
            map(
              res => addBookSuccess({ book: res }),
              catchError(err => of(addBookFail))
            )
          );
      })
    );
  });

  public deleteBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteBook),
      switchMap(action => {
        return this.restApiService
          .deleteBookById(action.book.id)
          .pipe(
            map(
              res => deleteBookSuccess({ book: res }),
              catchError(err => of(deleteBookFail))
            )
          );
      })
    );
  });

  // for future
  // public getUsers = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(getUsers),
  //     switchMap(action => {
  //       return this.restApiService
  //         .getUser()
  //         .pipe(
  //           map(
  //             res => getUsersSuccess({ users: res }),
  //             catchError(err => of(getUsersFail))
  //           )
  //         );
  //     })
  //   );
  // });

  constructor(
    private actions$: Actions,
    private restApiService: RestApiService
  ) {}
}
