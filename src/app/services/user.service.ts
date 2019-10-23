import { Injectable } from '@angular/core';

import { Transaction } from '../models/transaction-model';
import { User } from '../models/user-model';
import { BookstoreService } from './bookstore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private bankAccount = 1500;

  constructor(private bookstoreService: BookstoreService) {}

  public addMoneyToWallet(user: User): void {
    user.wallet.balance.value += this.bankAccount;
    console.log('dodano środki z Banku');
  }

  public buyBookAsGift(
    userBuying: User,
    userReceiving: User,
    transaction: Transaction
  ): void {
    if (
      this.bookstoreService.hasBookInBorrowBooks(transaction) ||
      this.bookstoreService.hasBookInBoughtBooks(transaction)
    ) {
      return;
    }

    if (userBuying.wallet.balance.value >= transaction.book.price) {
      userReceiving.boughtBooks.push(transaction.book);
      userBuying.wallet.balance.value -= transaction.book.price;
    }
  }
}
