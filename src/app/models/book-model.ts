import { bookType } from "../book-type.enum";

export class Book {
  public nameBook: string;
  public bookCategory: bookType;
  public author: string;

  public constructor(nameBook: string, bookCategory: bookType, author: string) {
    this.nameBook = nameBook;
    this.bookCategory = bookCategory;
    this.author = author;
  }
}
