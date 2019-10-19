import { Component } from '@angular/core';

import { bookType } from './book-type.enum';
import { Book } from './models/book-model';
import { Bookstore } from './models/bookstore-model';
import { Transaction } from './models/transaction-model';
import { User } from './models/user-model';
import { Wallet } from './models/wallet-model';
import { transactionType } from './transaction-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore-app';
}

class Program {
  public static main(): void {
    const bookstore = new Bookstore();
    const book1 = new Book(1, 'Some Book', bookType.Comedy, 'Jaś Fasola', 15);
    const book2 = new Book(
      2,
      'Alicja w Krainie Czarów',
      bookType.Criminal,
      'Jacek Jakiś',
      20
    );
    const book3 = new Book(
      3,
      'Dzieci z Bul',
      bookType.Romantic,
      'Janusz Kot',
      20
    );
    const book4 = new Book(
      4,
      'JavaScript',
      bookType.Comedy,
      'Maciek Garncarz',
      20
    );
    const books = [book1, book2, book3, book4];

    const user1 = new User('Jan Maj', 'maj@gmail.com', new Wallet(150));
    const user2 = new User(
      'Ania Lewangolska',
      'ania@gmail.com',
      new Wallet(650)
    );
    const user3 = new User('Zosia Stróż', 'zosia@gmail.com', new Wallet(90));
    const user4 = new User('Maciek Król', 'krol@gmail.com', new Wallet(50));
    const user5 = new User('Tomek Kot', 'kot@gmail.com', new Wallet(154));

    const users = [user2, user3, user4, user5];

    bookstore.addBooks(books);
    console.log(bookstore.books);

    bookstore.addUser(user1);
    // console.log(bookstore.clients[0]);

    bookstore.addUsers(users);
    console.log(bookstore.clients);

    const transaction1 = new Transaction(
      user1,
      transactionType.boughtBooks, new Date(),
      book2
    );

    const transaction2 = new Transaction(
      user2,
      transactionType.boughtBooks, new Date(),
      book3
    );

    bookstore.buyBook(transaction1, user1);
    console.log(transaction1);

    bookstore.buyBook(transaction2, user2);
    console.log(transaction2);
  }
}

Program.main();
