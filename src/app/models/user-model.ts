import { Guid } from 'guid-typescript';

import { Book } from './book-model';
import { Wallet } from './wallet-model';

export class User {
  public id: Guid;
  public name: string;
  public email: string;
  public wallet: Wallet;
  public borrowBooks: Array<Book> = [];
  public boughtBooks: Array<Book> = [];

  public constructor(name: string, email: string, wallet: Wallet) {
    this.id = Guid.create();
    this.name = name;
    this.email = email;
    this.wallet = wallet;
  }
}
