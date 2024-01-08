import { Component } from '@angular/core';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
})
export class BooksContainerComponent {
  searchInput = '';
  showSearchInputValue = false;

  onSearchClicked(): void {
    this.showSearchInputValue = !!this.searchInput;
  }

  setValue(): void {
    this.searchInput = 'SomeName';
    this.showSearchInputValue = !!this.searchInput;
  }
}
