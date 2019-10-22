import { Book } from './book-model';
import { Wallet } from './wallet-model';

export class User {
  public name: string;
  public email: string;
  public wallet: Wallet;
  public borrowBooks: Array<Book> = [];
  public boughtBooks: Array<Book> = [];
  private bankAccount = 1500;

  public constructor(name: string, email: string, wallet: Wallet) {
    this.name = name;
    this.email = email;
    this.wallet = wallet;
  }
}
