import { bookType } from '../book-type.enum';
import { BookBorrow } from './book-borrow';
import { Author } from './author-model';
import { Guid } from 'guid-typescript';
import { Price } from './price-model';

export class Book {
  public id: Guid;
  public name: string;
  public bookCategory: bookType;
  public author: Author;
  public price: Price;
  public rentalPrice: Price;
  public borrowData: BookBorrow;

  public constructor(
    name: string,
    bookCategory: bookType,
    author: Author,
    price: Price,
    rentalPrice: Price
  ) {
    this.id = Guid.create();
    this.name = name;
    this.bookCategory = bookCategory;
    this.author = author;
    this.price = price;
    this.rentalPrice = rentalPrice;
  }
}
