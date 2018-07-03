import { Component, Output, Input } from '@angular/core';
import {Book } from './book.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   selectedBook ;
   newBook ;
   selectedBookIndex ;
   showNew ;
  // @Input() returnedBook: string;
  // tslint:disable-next-line:max-line-length
  books = ['In Search of Lost Time by Marcel Proust', 'Don Quixote by Miguel de Cervantes', 'Ulysses by James Joyce', ' The Great Gatsby by F. Scott Fitzgerald', 'Moby Dick by Herman Melville', 'Hamlet by William Shakespeare'] ;
  onselectedBook(data: string, index) {
      this.selectedBook = data ;
      this.selectedBookIndex = index ;

  }
  doSomething(data) {
     this.books[this.selectedBookIndex] = data ;
  }
  onAddNew() {
      this.books.push(this.newBook) ;
      this.newBook = '' ;
  }

}
