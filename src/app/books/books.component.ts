import { Component } from "@angular/core";

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
})


export class BooksComponent {
    fromChildMessage: string = "We help you to find books!"
}