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

  public buyBook(transaction: Transaction, client: User): void {
    if (client.wallet.currentCash >= transaction.book.price) {
      client.boughtBooks.push(transaction.book);
      client.wallet.currentCash -= transaction.book.price;
      console.log('ksiązka kupiona');
    }
  }

  public borrowBook(transaction: Transaction, client: User): void {
    client.borrowBooks.forEach(value => {
      if (value.nameBook === transaction.book.nameBook) {
        console.log('user already have this book');
        return;
      }
    });
    client.boughtBooks.forEach(item => {
      if (item.nameBook === transaction.book.nameBook) {
        console.log('user already have this book');
        return;
      }
    });
    if (client.wallet.currentCash >= transaction.book.price) {
      client.borrowBooks.push(transaction.book);
      client.wallet.currentCash -= transaction.book.rentalPrice;
    }
  }
}
