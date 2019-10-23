import { returnBookOption } from '../return-book-type.enum';

export class BookBorrow {
  public dateBorrowBook: Date;
  public dateReturnBook: returnBookOption;

  get getReturnDate(): Date {
    if (this.dateReturnBook === returnBookOption.after5days) {
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 5);
      return returnDate;
    }
  }

}
