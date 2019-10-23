import { Price } from './price-model';

export class Wallet {
    public currentCash: Price;

    public constructor(currentCash: Price) {
      this.currentCash = currentCash;
    }
  }
