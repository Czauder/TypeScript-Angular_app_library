import { ReturnBookOption } from '../return-book-type.enum';

export class BookBorrow {
  public borrowBookDate: Date;
  public returnBookDate: ReturnBookOption;

  get getReturnDate(): Date {
    if (this.returnBookDate === ReturnBookOption.after5days) {
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 5);
      return returnDate;
    }
  }

}
