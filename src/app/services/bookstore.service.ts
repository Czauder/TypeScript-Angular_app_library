import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction-model';
import { User } from '../models/user-model';
import { Book } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  public clients: Array<User> = [];
  public books: Array<Book> = [];

  constructor() {}

  public addUser(client: User): void {
    this.clients.push(client);
  }

  public addBook(book: Book): void {
    console.log(book);
    this.books.push(book);
  }

  public addBooks(books: Array<Book>): void {
    this.books = this.books.concat(books);
    // console.log(this.books)
    console.log(books);
  }

  public addUsers(clients: Array<User>) {
    this.clients = this.clients.concat(clients);
  }

  public buyBook(transaction: Transaction): void {
    if (transaction.user.wallet.currentCash.value >= transaction.book.price) {
      transaction.user.boughtBooks.push(transaction.book);
      transaction.user.wallet.currentCash.value -= transaction.book.price;
      console.log('ksiązka kupiona');
    }
  }

  public borrowBook(transaction: Transaction): void {
    transaction.user.borrowBooks.forEach(value => {
      if (value.nameBook === transaction.book.nameBook) {
        console.log('user already have this book');
        return;
      }
    });
    transaction.user.boughtBooks.forEach(item => {
      if (item.nameBook === transaction.book.nameBook) {
        console.log('user already have this book');
        return;
      }
    });
    if ( transaction.user.wallet.currentCash.value >= transaction.book.price) {
      transaction.user.borrowBooks.push(transaction.book);
      transaction.user.wallet.currentCash.value -= transaction.book.rentalPrice;
    }
  }
}
