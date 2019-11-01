import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BookType } from '../book-type.enum';
import { CurrencyType } from '../currency-type.enum';
import { Book } from '../models/book-model';
import { BookstoreService } from '../services/bookstore.service';
import { addBook } from '../store/actions';
import { ApplicationState } from '../store/state';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent implements OnInit {
  public bookModel: Book = {
    id: 0,
    name: '',
    bookCategory: BookType.Comedy,
    author: {
      id: 0,
      firstName: '',
      lastName: ''
    },
    price: {
      value: 0,
      currency: CurrencyType.dollar
    },
    rentalPrice: {
      value: 0,
      currency: CurrencyType.dollar
    }
  };

  constructor(
    public bookstoreService: BookstoreService,
    private store: Store<ApplicationState>
  ) {}

  public ngOnInit(): void {}

  public onFormSubmit() {
    // console.log(bookForm.value);
    // console.log(this.bookModel);
    this.store.dispatch(addBook({ book: this.bookModel }));
  }
}
