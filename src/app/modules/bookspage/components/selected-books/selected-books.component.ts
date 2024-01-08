import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-selected-books',
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.scss'],
})
export class SelectedBooksComponent {
  @Input() selectedBooks!: Book[];
}
