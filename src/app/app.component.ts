import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "bookstore-app";
}

export enum bookType {
  Romantic = "Romantic",
  Criminal = "Criminal",
  Comedy = "Comedy"
}

class Program {
  public static main(): void {
    const bookstore = new Bookstore();
    console.log(bookstore);
  }
}
export class Bookstore {
  public clients: Array<Person> = [];
  public books: Array<Book> = [];
}

export class Person {
  public name: string;
  public email: string;
  public wallet: Wallet;
  public userFinancialAccount: UserFinancialAccount;
  public borrowBooks: Array<Book>;
  public boughtBooks: Array<Book>;

  public constructor(
    name: string,
    email: string,
    wallet: Wallet,
    borrowBooks?: [],
    boughtBooks?: []
  ) {
    this.name = name;
    this.email = email;
    (this.wallet = wallet),
      (this.borrowBooks = borrowBooks),
      (this.boughtBooks = boughtBooks);
  }
}

export class Wallet {
  public currentCash: number;

  public constructor(currentCash: number) {
    this.currentCash = currentCash;
  }
}

export class UserFinancialAccount {
  public cash: number;

  public constructor(cash: number) {
    this.cash = cash;
  }
}

export class Book {
  public nameBook: string;
  public bookCategory: bookType;
  public author: string;

  public constructor(nameBook: string, bookCategory: bookType, author: string) {
    this.nameBook = nameBook;
    this.bookCategory = bookCategory;
    this.author = author;
  }
}

Program.main();
