import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { BookstoreService } from './bookstore.service';
import { User } from '../models/user-model';
import { Wallet } from '../models/wallet-model';
import { Book } from '../models/book-model';
import { bookType } from '../book-type.enum';
import { Price } from '../models/price-model';
import { Author } from '../models/author-model';
import { CurrencyType } from '../currency-type.enum';
import { Transaction } from '../models/transaction-model';
import { transactionType } from '../transaction-type.enum';

describe('BookstoreService', () => {
  let spectator: SpectatorService<BookstoreService>;
  const createService = createServiceFactory({
    service: BookstoreService
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should be created', () => {
    const user = new User('Jaś Kot', 'kot@gmail.com', new Wallet(1555));

    const book = new Book(
      'Jakaś Książka',
      bookType.Comedy,
      new Author('Pan', 'Ktoś'),
      new Price(150, CurrencyType.euro),
      new Price(50, CurrencyType.euro)
    );

    const transaction = new Transaction(
      user,
      transactionType.borrowBooks,
      new Date(),
      book
    );
  });

  it('should borrow book', () => {
    const user = new User('Jaś Kot', 'kot@gmail.com', new Wallet(1555));

    const book = new Book(
      'Jakaś Książka',
      bookType.Comedy,
      new Author('Pan', 'Ktoś'),
      new Price(150, CurrencyType.euro),
      new Price(50, CurrencyType.euro)
    );

    const transaction = new Transaction(
      user,
      transactionType.borrowBooks,
      new Date(),
      book
    );

    spectator.service.borrowBook(transaction);
    const expectBorrowBook = spectator.service.books.find(
      x => x === transaction.book
    );
    expect(spectator.service.books.includes(expectBorrowBook)).toBeFalsy();
  });

  it('should add book', () => {
    const bookMock = new Book(
      'Jakaś Książka',
      bookType.Comedy,
      new Author('Pan', 'Ktoś'),
      new Price(150, CurrencyType.euro),
      new Price(50, CurrencyType.euro)
    );

    spectator.service.addBook(bookMock);
    expect(spectator.service.books.length).toBeGreaterThan(0);
  });

  it('should add user', () => {
    const user = new User('Jaś Kot', 'kot@gmail.com', new Wallet(1555));

    spectator.service.addUser(user);
    expect(spectator.service.clients.includes(user)).toBeTruthy();
  });

  it('should not make transaction when wallet is empty', () => {
    const user2 = new User('Asia Janek', 'janek@gmail.com', new Wallet(0));

    const book = new Book(
      'Jakaś Książka',
      bookType.Comedy,
      new Author('Pan', 'Ktoś'),
      new Price(150, CurrencyType.euro),
      new Price(50, CurrencyType.euro)
    );

    const transaction2 = new Transaction(
      user2,
      transactionType.boughtBooks,
      new Date(),
      book
    );

    const userBoughtBooks = user2.boughtBooks.length;
    const userWallet = user2.wallet.balance;

    spectator.service.buyBook(transaction2);
    expect(user2.boughtBooks.length).toEqual(userBoughtBooks);
    expect(user2.wallet.balance).toEqual(userWallet);
  });
});
