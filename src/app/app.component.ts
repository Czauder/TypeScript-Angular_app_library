import { Component, OnInit } from '@angular/core';

import { bookType } from './book-type.enum';
import { Book } from './models/book-model';
import { Bookstore } from './models/bookstore-model';
import { Transaction } from './models/transaction-model';
import { User } from './models/user-model';
import { Wallet } from './models/wallet-model';
import { BookstoreService } from './services/bookstore.service';
import { UserService } from './services/user.service';
import { transactionType } from './transaction-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookstore-app';
  public bookstore = new Bookstore();
  public book1 = new Book(1, 'Angular 8', bookType.Comedy, 'Mike John', 50, 10);
  public book2 = new Book(
    2,
    'Alicja w Krainie Czarów',
    bookType.Criminal,
    'Jacek Jakiś',
    20,
    10
  );
  public book3 = new Book(
    3,
    'Dzieci z Bul',
    bookType.Romantic,
    'Janusz Kot',
    20,
    5
  );
  public book4 = new Book(
    4,
    'JavaScript',
    bookType.Comedy,
    'Maciek Garncarz',
    20,
    5
  );
  public books = [this.book2, this.book3, this.book4];

  public user1 = new User('Jan Maj', 'maj@gmail.com', new Wallet(150));
  public user2 = new User(
    'Ania Lewangolska',
    'ania@gmail.com',
    new Wallet(650)
  );
  public user3 = new User('Zosia Stróż', 'zosia@gmail.com', new Wallet(90));
  public user4 = new User('Maciek Król', 'krol@gmail.com', new Wallet(50));
  public user5 = new User('Tomek Kot', 'kot@gmail.com', new Wallet(154));

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

    this.bookstoreService.buyBook(this.transaction1, this.user1);

    this.userService.addMoneytoWallet(this.user1);
  }
}
