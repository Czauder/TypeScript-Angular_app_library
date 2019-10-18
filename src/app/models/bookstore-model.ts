import { Book } from "./book-model";
import { User } from "./user-model";

export class Bookstore {
    public clients: Array<User> = [];
    public books: Array<Book> = [];
  }
