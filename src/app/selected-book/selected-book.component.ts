import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.css']
})
export class SelectedBookComponent implements OnInit {
 @Input() book;
 @Output() returnEditedBook = new EventEmitter<any>() ;
 editedData = '' ;
 enableUndo = false  ;
 show = false ;
  constructor() { }

  ngOnInit() {
  }
  beginEdit() {
    if (this.show === true) {
      this.show = false ;
    } else {
      this.show = true ;
    }
  }
  finishEdit() {
    if (this.editedData.length > 0) {
      this.book = this.editedData ;
    }
    this.editedData = '' ;
    this.show = false ;
    this.returnEditedBook.emit(this.book) ;
    this.enableUndo = true ;

  }
}
