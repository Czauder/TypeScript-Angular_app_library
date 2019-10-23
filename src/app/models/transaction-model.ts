import { transactionType } from '../transaction-type.enum';
import { Book } from './book-model';
import { User } from './user-model';

export class Transaction {
  public constructor(
    public user: User,
    public typeTransaction: transactionType,
    public date: Date,
    public book: Book
  ) {
    this.user = user;
    this.typeTransaction = typeTransaction;
    this.date = date;
    this.book = book;
  }
}
