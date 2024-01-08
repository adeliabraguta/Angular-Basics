import { Component } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  books: Book[] = [
    {
      id: 1,
      authors: ['Azat Mardan'],
      title: 'Practical Node.js',
      imgSource: 'assets/images/practical-node-js.jpg',
      price: 25,
    },
    {
      id: 2,
      authors: ['Marjin Haverbeke'],
      title: 'Eloquent Javascript',
      imgSource: 'assets/images/eloquent-js.jpg',
      price: 40,
    },
    {
      id: 3,
      authors: ['Nate Murray', 'Felipe Coury', 'Ari Lerner', 'Carlos Taborda'],
      title: 'ng-book',
      imgSource: 'assets/images/ng-book.png',
      price: 25,
    },
    {
      id: 4,
      authors: ['Adam Freeman'],
      title: 'Pro Angular',
      imgSource: 'assets/images/practical-node-js.jpg',
      price: 29,
    },
    {
      id: 5,
      authors: ['Kyle Simpson'],
      title: 'Scope & Closures',
      imgSource: 'assets/images/scope-closures.png',
      price: 33,
    },
  ];

  selectedBooks: Book[] = [];

  onBookSelected(event: Book) {
    this.selectedBooks.push(event);
  }

  onBookRemoved(event: Book) {
    this.selectedBooks = this.selectedBooks.filter(
      (book) => book.id !== event.id,
    );
  }
}
