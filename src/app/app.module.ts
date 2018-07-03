import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe} from './filter.pipe';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {Book } from './book.model';
import {Routes, RouterModule} from '@angular/router';
import { SelectedBookComponent } from './selected-book/selected-book.component';
const appRoutes: Routes = [
{path: 'bookView', component: SelectedBookComponent} ,
{path : '', component: AppComponent}
];
@NgModule({
  declarations: [
    AppComponent, FilterPipe, SelectedBookComponent
  ],
  imports: [
    BrowserModule , FormsModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
