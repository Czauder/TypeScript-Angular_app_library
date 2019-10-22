import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private bankAccount = 1500;

  constructor() { }

  public addMoneytoWallet(user: User): void {
    user.wallet.currentCash += this.bankAccount;
    console.log('dodano środki z Banku');
  }
}
