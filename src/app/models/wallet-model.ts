import { Price } from './price-model';

export class Wallet {
    public balance: Price;

    public constructor(balance: Price) {
      this.balance = balance;
    }
  }
