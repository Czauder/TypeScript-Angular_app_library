import { bookType } from '../book-type.enum';

export class Book {
  public id: number;
  public nameBook: string;
  public bookCategory: bookType;
  public author: string;
  public price: number;

  public constructor(id: number, nameBook: string, bookCategory: bookType, author: string, price: number) {
    this.id = id;
    this.nameBook = nameBook;
    this.bookCategory = bookCategory;
    this.author = author;
    this.price = price;
  }
}
