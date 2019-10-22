import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public wallet: Wallet;
  private bankAccount = 1500;

  constructor() { }

  public addMoneytoWallet(): void {
    this.wallet.currentCash += this.bankAccount;
    console.log('dodano środki z Banku');
  }
}
