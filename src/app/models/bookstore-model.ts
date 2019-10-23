import { Book } from './book-model';
import { User } from './user-model';
import { Transaction } from './transaction-model';

export class Bookstore {
  public clients: Array<User> = [];
  public books: Array<Book> = [];

}


// if (new Date() > transaction.book.borrowData.getReturnDate){
//   client.borrowBooks.filter(x => {
//     return x.id != id;
//   });
