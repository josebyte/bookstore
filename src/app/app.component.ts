import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Librería';
  book = {
    title: 'Angular 11 en castellano',
    author: 'Joseba Madrigal',
    desc: 'Aprende de 0 a experto construyendo un proyecto real que incluye lazy loading, NGRX y PWA.',
    price: 9
  };
}
