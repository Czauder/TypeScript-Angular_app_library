import { Book } from './book-model';
import { User } from './user-model';
import { Transaction } from './transaction-model';

export class Bookstore {
  public clients: Array<User> = [];
  public books: Array<Book> = [];

  public addUser(client: User): void {
    this.clients.push(client);
  }

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public addBooks(books: Array<Book>): void {
    this.books = this.books.concat(books);
  }

  public addUsers(clients: Array<User>) {
    this.clients = this.clients.concat(clients);
  }

  public buyBook(transaction: Transaction, client: User): void {
    if (client.wallet.currentCash >= transaction.book.price) {
      client.boughtBooks.push(transaction.book);
      client.wallet.currentCash -= transaction.book.price;
    }
  }

  public borrowBook(transaction: Transaction, client: User): void {
    if (client.wallet.currentCash >= transaction.book.price) {
      client.borrowBooks.push(transaction.book);
      client.wallet.currentCash -= transaction.book.rentalPrice;
    }
  }
}
