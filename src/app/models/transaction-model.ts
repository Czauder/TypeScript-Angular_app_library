import { TransactionType } from '../transaction-type.enum';
import { Book } from './book-model';
import { User } from './user-model';

export class Transaction {
  public user: User;
  public typeTransaction: TransactionType;
  public date: Date;
  public book: Book;

  public constructor(
    user: User,
    typeTransaction: TransactionType,
    date: Date,
    book: Book
  ) {
    this.user = user;
    this.typeTransaction = typeTransaction;
    this.date = date;
    this.book = book;
  }
}
