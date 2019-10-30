import { BookType } from '../book-type.enum';
import { Author } from './author-model';
import { BookBorrow } from './book-borrow';
import { Price } from './price-model';

export class Book {
  public id: number;
  public name: string;
  public bookCategory: BookType;
  public author: Author;
  public price: Price;
  public rentalPrice: Price;
  // public borrowData: BookBorrow;

  public constructor(
    id: number,
    name: string,
    bookCategory: BookType,
    author: Author,
    price: Price,
    rentalPrice: Price
  ) {
    this.id = id;
    this.name = name;
    this.bookCategory = bookCategory;
    this.author = author;
    this.price = price;
    this.rentalPrice = rentalPrice;
  }
}
