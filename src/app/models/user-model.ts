import { Wallet } from "./wallet-model";
import { UserFinancialAccount } from "./user-financial-account-model";
import { Book } from "./book-model";

export class User {
  public name: string;
  public email: string;
  public wallet: Wallet;
  public userFinancialAccount: UserFinancialAccount;
  public borrowBooks: Array<Book> = [];
  public boughtBooks: Array<Book> = [];

  public constructor(
    name: string,
    email: string,
    wallet: Wallet,
    borrowBooks?: [],
    boughtBooks?: []
  ) {
    this.name = name;
    this.email = email;
    this.wallet = wallet;
    this.borrowBooks = borrowBooks;
    this.boughtBooks = boughtBooks;
  }
}
