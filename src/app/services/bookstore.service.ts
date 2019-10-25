import { Injectable } from '@angular/core';

import { Book } from '../models/book-model';
import { Transaction } from '../models/transaction-model';
import { User } from '../models/user-model';

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
    console.log(books);
  }

  public addUsers(clients: Array<User>) {
    this.clients = this.clients.concat(clients);
  }

  private hasBookInBorrowBooks(transaction: Transaction): boolean {
    for (const value of transaction.user.borrowBooks) {
      if (value.name === transaction.book.name) {
        console.log('user already have this book');
        return true;
      }
    }
    return false;
  }

  private hasBookInBoughtBooks(transaction: Transaction): boolean {
    for (const item of transaction.user.borrowBooks) {
      if (item.name === transaction.book.name) {
        console.log('user already have this book');
        return true;
      }
    }
    return false;
  }

  public buyBook(transaction: Transaction): void {
    if (
      !(
        this.hasBookInBorrowBooks(transaction) ||
        this.hasBookInBoughtBooks(transaction)
      )
    ) {
      if (transaction.user.wallet.balance >= transaction.book.price.value) {
        transaction.user.boughtBooks.push(transaction.book);
        transaction.user.wallet.balance -= transaction.book.price.value;
        console.log('ksiązka kupiona');
      }
    }
  }

  public borrowBook(transaction: Transaction): void {
    if (
      this.hasBookInBorrowBooks(transaction) ||
      this.hasBookInBoughtBooks(transaction)
    ) {
      return;
    }
    if (transaction.user.wallet.balance >= transaction.book.price.value) {
      transaction.user.borrowBooks.push(transaction.book);
      transaction.user.wallet.balance -= transaction.book.rentalPrice.value;
    }
  }

  public buyBookAsGift(
    userBuying: User,
    userReceiving: User,
    transaction: Transaction
  ): void {
    if (
      this.hasBookInBorrowBooks(transaction) ||
      this.hasBookInBoughtBooks(transaction)
    ) {
      return;
    }
    if (userBuying.wallet.balance >= transaction.book.price.value) {
      userReceiving.boughtBooks.push(transaction.book);
      userBuying.wallet.balance -= transaction.book.price.value;
    }
  }
}
