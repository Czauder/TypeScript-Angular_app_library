import { returnBookOption } from '../return-book-type.enum';

export class BookBorrowData {
    public dateBorrowBook: Date;
    public dateReturnBook: returnBookOption;
}