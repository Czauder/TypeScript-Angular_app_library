import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction-model';
import { User } from '../models/user-model';
import { Book } from '../models/book-model';
import { transactionType } from '../transaction-type.enum';

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
    transaction.user.borrowBooks.forEach(value => {
      if (value.name === transaction.book.name) {
        console.log('user already have this book');
      }
    });
    return true;
  }

  private hasBookInBoughtBooks(transaction: Transaction): boolean {
    transaction.user.boughtBooks.forEach(item => {
      if (item.name === transaction.book.name) {
        console.log('user already have this book');
      }
    });
    return true;
  }

  public buyBook(transaction: Transaction): void {
    if (
      this.hasBookInBorrowBooks(transaction) ||
      this.hasBookInBoughtBooks(transaction)
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
