import { bookType } from '../book-type.enum';
import { BookBorrow } from './book-borrow';
import { Author } from './author-model';

export class Book {
  public id: number;
  public nameBook: string;
  public bookCategory: bookType;
  public author: Author;
  public price: number;
  public rentalPrice: number;
  public borrowData: BookBorrow;

  public constructor(
    id: number,
    nameBook: string,
    bookCategory: bookType,
    author: Author,
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
