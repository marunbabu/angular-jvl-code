import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Counter } from './signals/counter/counter';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Counter,CommonModule],
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
  title = "MyApp";

  getName() {
    return "response from method";
  }

  imageUrl = "https://picsum.photos/seed/picsum/200/300";
  imageAlt = "Angular Logo";

  //user:any = null; you can use this to test what happens if user is null or undefined

  user = {
    name: "John Doe",
    age: 30
  }
  //below example is to show how to use signal in angular 16
  clickCount = 0;
  clickMe() {
    this.clickCount++;
  }
    //--------example is to show how to use signal in angular 16

  //below example is to show strucutural directive *ngIf and *ngFor in angular 16


  // example is to show strucutural directive *ngIf and *ngFor in angular

  movies = [
   'batman',
    'spiderman',
    'avengers',
    'ghilli'
  ]
  //ngif example
  showme = true;

}
