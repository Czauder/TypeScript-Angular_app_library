export class Wallet {
    public currentCash: number;
    public operationDate: string;

    public constructor(currentCash: number, operationDate: string) {
      this.currentCash = currentCash;
      this.operationDate = operationDate;
    }
  }
