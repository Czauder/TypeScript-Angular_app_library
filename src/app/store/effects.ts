import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getBooks,
  getBooksSuccess,
  getBooksFail,
  addBook,
  addBookSuccess,
  addBookFail
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

  constructor(
    private actions$: Actions,
    private restApiService: RestApiService
  ) {}
}
