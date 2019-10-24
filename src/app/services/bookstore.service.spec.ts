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
    const userMock = new User('Jaś Kot', 'kot@gmail.com', new Wallet(1555));

    const bookMock = new Book(
      'Jakaś Książka',
      bookType.Comedy,
      new Author('Pan', 'Ktoś'),
      new Price(150, CurrencyType.euro),
      new Price(50, CurrencyType.euro)
    );

    const transaction = new Transaction(
      userMock,
      transactionType.borrowBooks,
      new Date(),
      bookMock
    );

    spectator.service.borrowBook(transaction);
    const expectBorrowBook = spectator.service.books.find(
      x => x === transaction.book
      );
      
    console.log(expectBorrowBook);
    console.log(transaction.user.borrowBooks);
    expect(spectator.service.books.includes(expectBorrowBook)).toBeFalsy();
  });
});
