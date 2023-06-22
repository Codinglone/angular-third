import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-third';
  message: string = "Hello from parent component";
  messageFromChild: string = '';

  @ViewChild(BooksComponent) fromChild!: BooksComponent

  constructor(){
    console.log(this.messageFromChild);
    
  }

  ngAfterViewInit(): void {
    console.log(this.messageFromChild);
    
    this.messageFromChild = this.fromChild.fromChildMessage;
  }
}
