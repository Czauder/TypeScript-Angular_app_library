import { bookType } from '../book-type.enum';
import { BookBorrowData } from './book-borrow-data-model';

export class Book {
  public id: number;
  public nameBook: string;
  public bookCategory: bookType;
  public author: string;
  public price: number;
  public rentalPrice: number;
  public borrowData: BookBorrowData;

  public constructor(
    id: number,
    nameBook: string,
    bookCategory: bookType,
    author: string,
    price: number,
    rentalPrice: number
  ) {
    this.id = id;
    this.nameBook = nameBook;
    this.bookCategory = bookCategory;
    this.author = author;
    this.price = price;
    this.rentalPrice = rentalPrice;
  }
}
