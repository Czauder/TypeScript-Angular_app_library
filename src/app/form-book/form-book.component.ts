import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../models/book-model';
import { BookstoreService } from '../services/bookstore.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent implements OnInit {
  public bookModel: Book;

  constructor(public bookstoreService: BookstoreService) {}

 public ngOnInit(): void {}

  public onFormSubmit() {
    // console.log(bookForm.value);
    console.log(this.bookModel);
    this.bookstoreService.sendBookToServer(this.bookModel);
  }

  public resetUserForm(bookForm: NgForm) {
    bookForm.resetForm();
    console.log('reset');
  }
}
