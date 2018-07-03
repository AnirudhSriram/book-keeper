import { Component, Output, Input } from '@angular/core';
import {Book } from './book.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   showList = true;
   selectedBook ;
   newBook ;
   selectedBookIndex ;
   showNew ;
  // tslint:disable-next-line:max-line-length
  books = ['In Search of Lost Time by Marcel Proust', 'Don Quixote by Miguel de Cervantes', 'Ulysses by James Joyce', ' The Great Gatsby by F. Scott Fitzgerald', 'Moby Dick by Herman Melville', 'Hamlet by William Shakespeare'] ;
  // Function to pass data to child and remember index on the array to update list once child submits event//
  onselectedBook(data: string, index) {
      this.selectedBook = data ;
      this.selectedBookIndex = index ;
  }
  // Function to change the edited book on the book list//
  updateList(data) {
    this.selectedBook = '';
     this.books[this.selectedBookIndex] = data ;
  }
  // Function that adds new book to the bookArray//
  onAddNew() {
      this.books.push(this.newBook) ;
      this.newBook = '' ;
  }

}
