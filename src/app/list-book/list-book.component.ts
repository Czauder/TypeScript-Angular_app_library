import { Component, OnInit } from '@angular/core';
import { ApplicationState, selectBooks } from '../store/state';
import { Store } from '@ngrx/store';
import { Book } from '../models/book-model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  public constructor(private store: Store<ApplicationState>) {}
  public books: Book[] = [];

  public ngOnInit(): void {
    this.store.select(selectBooks).subscribe(books => {
      this.books = books;
    });
  }
}
