import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  createComponentFactory,
  mockProvider,
  Spectator
} from '@ngneat/spectator';

import { BookstoreService } from '../services/bookstore.service';
import { RestApiService } from '../services/rest-api.service';
import { FormBookComponent } from './form-book.component';
import { BookType } from '../book-type.enum';
import { CurrencyType } from '../currency-type.enum';
import { Store } from '@ngrx/store';

describe('app-form-book', () => {
  let inputs: any;
  let spectator: Spectator<FormBookComponent>;
  const createComponent = createComponentFactory({
    component: FormBookComponent,
    imports: [FormsModule, ReactiveFormsModule],
    providers: [BookstoreService, RestApiService, mockProvider(HttpClient), mockProvider(Store)]
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.component.bookModel = {
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
    inputs = spectator.queryAll('.style-input');
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should input have required attribute ', () => {
    spectator.detectComponentChanges();
    for (const input of inputs) {
      expect(input.hasAttribute('required')).toBeTruthy();
    }
  });
});
