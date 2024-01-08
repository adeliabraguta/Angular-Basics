import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BooksContainerComponent } from './books-container.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';
import { BookImageHoverDirective } from './directives/book-image-hover.directive';
import { SortPipe } from './pipes/sort.pipe';
import { SelectedBooksComponent } from './components/selected-books/selected-books.component';

@NgModule({
  declarations: [
    BooksContainerComponent,
    BooksListComponent,
    BookComponent,
    BookImageHoverDirective,
    SortPipe,
    SelectedBooksComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [BooksContainerComponent],
})
export class BooksPageModule {}
