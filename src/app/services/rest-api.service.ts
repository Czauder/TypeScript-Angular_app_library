import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from '../models/book-model';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:20000/api';

  public constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(
      this.apiURL + '/books',
      JSON.stringify(book),
      this.httpOptions
    );
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.apiURL + '/users',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  public getBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL + '/books');
  }

  // public getUser(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiURL + '/users');
  // }

  // jak dodać obsługę błedu?
  // Error handling
  public handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // GET client-side error
      errorMessage = error.error.message;
    } else {
      // GET server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
