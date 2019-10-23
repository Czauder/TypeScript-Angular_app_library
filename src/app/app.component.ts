import { Component, OnInit } from '@angular/core';

import { bookType } from './book-type.enum';
import { Author } from './models/author-model';
import { Book } from './models/book-model';
import { Bookstore } from './models/bookstore-model';
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
  public bookstore = new Bookstore();
  public book1 = new Book(
    Guid.create(),
    'Angular 8',
    bookType.Comedy,
    new Author(Guid.create(), 'Janusz', 'Malarz'),
    50,
    10
  );
  public book2 = new Book(
    Guid.create(),
    'Alicja w Krainie Czarów',
    bookType.Criminal,
    new Author(Guid.create(), 'Janusz', 'Niewiem'),
    20,
    10
  );
  public book3 = new Book(
    Guid.create(),
    'Dzieci z Bul',
    bookType.Romantic,
    new Author(Guid.create(), 'Kuba', 'Koś'),
    20,
    5
  );
  public book4 = new Book(
    Guid.create(),
    'JavaScript',
    bookType.Comedy,
    new Author(Guid.create(), 'Bogdan', 'Malarz'),
    20,
    5
  );
  public books = [this.book2, this.book3, this.book4];

  public user1 = new User(
    Guid.create(),
    'Jan Maj',
    'maj@gmail.com',
    new Wallet(new Price(123, CurrencyType.dollar))
  );
  public user2 = new User(
    Guid.create(),
    'Ania Lewangolska',
    'ania@gmail.com',
    new Wallet(new Price(650, CurrencyType.dollar))
  );
  public user3 = new User(
    Guid.create(),
    'Zosia Stróż',
    'zosia@gmail.com',
    new Wallet(new Price(1233, CurrencyType.dollar))
  );
  public user4 = new User(
    Guid.create(),
    'Maciek Król',
    'krol@gmail.com',
    new Wallet(new Price(783, CurrencyType.euro))
  );
  public user5 = new User(
    Guid.create(),
    'Tomek Kot',
    'kot@gmail.com',
    new Wallet(new Price(5564, CurrencyType.pln))
  );

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
    console.log(this.bookstore.books);

    this.bookstoreService.addUsers(this.users);
    console.log(this.bookstoreService.clients);

    this.bookstoreService.addUser(this.user1);
    console.log(this.bookstoreService.clients[0]);

    this.bookstoreService.buyBook(this.transaction1);

    this.userService.addMoneyToWallet(this.user1);
  }
}
