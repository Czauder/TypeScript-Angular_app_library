import { Component } from '@angular/core';

import { bookType } from './book-type.enum';
import { Book } from './models/book-model';
import { Bookstore } from './models/bookstore-model';
import { User } from './models/user-model';
import { Wallet } from './models/wallet-model';

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

    bookstore.addBooks(books);
    console.log(bookstore.books);
 
    bookstore.addUser(user1);
    console.log(bookstore.clients[0])
  }
}

Program.main();
