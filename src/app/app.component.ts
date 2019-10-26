import { Component, OnInit } from '@angular/core';

import { bookType } from './book-type.enum';
import { Author } from './models/author-model';
import { Book } from './models/book-model';
import { Transaction } from './models/transaction-model';
import { User } from './models/user-model';
import { Wallet } from './models/wallet-model';
import { BookstoreService } from './services/bookstore.service';
import { UserService } from './services/user.service';
import { transactionType } from './transaction-type.enum';
import { Price } from './models/price-model';
import { CurrencyType } from './currency-type.enum';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookstore-app';
  public book1 = new Book(
    'Angular 8',
    bookType.Comedy,
    new Author('Janusz', 'Malarz'),
    new Price(63, CurrencyType.pln),
    new Price(6, CurrencyType.pln)
  );
  public book2 = new Book(
    'Alicja w Krainie Czarów',
    bookType.Criminal,
    new Author('Janusz', 'Niewiem'),
    new Price(3, CurrencyType.pln),
    new Price(2, CurrencyType.pln)
  );
  public book3 = new Book(
    'Dzieci z Bul',
    bookType.Romantic,
    new Author('Kuba', 'Koś'),
    new Price(123, CurrencyType.pln),
    new Price(1, CurrencyType.pln)
  );
  public book4 = new Book(
    'JavaScript',
    bookType.Comedy,
    new Author('Bogdan', 'Malarz'),
    new Price(33, CurrencyType.pln),
    new Price(33, CurrencyType.pln)
  );
  public books = [this.book2, this.book3, this.book4];

  public user1 = new User('Jan Maj', 'maj@gmail.com', new Wallet(123));
  public user2 = new User(
    'Ania Lewangolska',
    'ania@gmail.com',
    new Wallet(324)
  );
  public user3 = new User('Zosia Stróż', 'zosia@gmail.com', new Wallet(1233));
  public user4 = new User('Maciek Król', 'krol@gmail.com', new Wallet(3423));
  public user5 = new User('Tomek Kot', 'kot@gmail.com', new Wallet(43534));

  public users = [this.user2, this.user3, this.user4, this.user5];

  public transaction1 = new Transaction(
    this.user1,
    transactionType.boughtBooks,
    new Date(),
    this.book2
  );

  public transaction2 = new Transaction(
    this.user2,
    transactionType.boughtBooks,
    new Date(),
    this.book3
  );

  public transaction3 = new Transaction(
    this.user4,
    transactionType.borrowBooks,
    new Date(),
    this.book4
  );

  public constructor(
    private userService: UserService,
    private bookstoreService: BookstoreService
  ) {}

  public ngOnInit(): void {
    this.bookstoreService.addBooks(this.books);
    // console.log(this.bookstore.books);

    this.bookstoreService.addBook(this.book1);
    console.log(this.bookstoreService.books);

    this.bookstoreService.addUsers(this.users);
    console.log(this.bookstoreService.clients);

    this.bookstoreService.addUser(this.user1);
    console.log(this.bookstoreService.clients[0]);

    this.bookstoreService.buyBook(this.transaction1);

    this.userService.addMoneyToWallet(this.user1, 150);

    // connection to an external server
    //  book
    // this.bookstoreService.sendBookToServer(this.book4);
    this.bookstoreService.loadBooksFromServer();

    // user
    // this.userService.sendUserToServer(this.user1);
    // this.userService.loadUsersFromServer();
  }
}
