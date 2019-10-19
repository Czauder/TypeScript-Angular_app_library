import { returnBookOption } from '../return-book-type.enum';

export class BookBorrowData {
  public dateBorrowBook: Date;
  public dateReturnBook: returnBookOption;
  private returnDate: Date;

  get getReturnDate(): Date {
    if (this.dateReturnBook === returnBookOption.after5days) {
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 5);
      return returnDate;
    }
  }

  public setReturnData(): void {}
}
