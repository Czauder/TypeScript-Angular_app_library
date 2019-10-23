import { Injectable } from '@angular/core';

import { User } from '../models/user-model';
import { BookstoreService } from './bookstore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 public constructor() {}

  public addMoneyToWallet(user: User, cash: number): void {
    user.wallet.balance += cash;
    console.log('dodano środki z Banku');
  }
}
