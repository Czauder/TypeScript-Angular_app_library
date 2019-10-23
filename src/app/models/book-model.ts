import { bookType } from '../book-type.enum';
import { BookBorrow } from './book-borrow';
import { Author } from './author-model';
import { Guid } from 'guid-typescript';

export class Book {
  public id: Guid;
  public name: string;
  public bookCategory: bookType;
  public author: Author;
  public price: number;
  public rentalPrice: number;
  public borrowData: BookBorrow;

  public constructor(
    id: Guid,
    name: string,
    bookCategory: bookType,
    author: Author,
    price: number,
    rentalPrice: number
  ) {
    this.id = Guid.create();
    this.name = name;
    this.bookCategory = bookCategory;
    this.author = author;
    this.price = price;
    this.rentalPrice = rentalPrice;
  }
}
