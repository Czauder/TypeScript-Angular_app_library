import { returnBookOption } from '../return-book-type.enum';

export class BookBorrow {
  public borrowBookDate: Date;
  public returnBookDate: returnBookOption;

  get getReturnDate(): Date {
    if (this.returnBookDate === returnBookOption.after5days) {
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 5);
      return returnDate;
    }
  }

}
