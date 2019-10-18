import { Book } from './book-model';
import { User } from './user-model';

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
}
