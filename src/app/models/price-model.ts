import { CurrencyType } from '../currency-type.enum';

export class Price {
  public value: number;
  public currency: CurrencyType;

  public constructor(value: number, currency: CurrencyType) {
    this.value = value;
    this.currency = currency;
  }
}
