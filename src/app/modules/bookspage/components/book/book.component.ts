import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input()
  book!: Book;

  @Output()
  bookSelect = new EventEmitter<Book>();

  @Output()
  bookRemove = new EventEmitter<Book>();

  isSelectedBook = false;

  addBookToList() {
    this.isSelectedBook = true;
    this.bookSelect.emit(this.book);
  }

  removeBookFromList() {
    this.isSelectedBook = false;
    this.bookRemove.emit(this.book);
  }
}
