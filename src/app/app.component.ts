import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Librería';

  books = [
    {
      title: 'MongoDb en Castellano',
      price: 6,
      author: 'Joseba Madrigal',
      desc: 'Aprende la base de datos no-relacional MongoDb.',
      image: 'mongodb.png',
      pdfonly: true,
      publish_date: '2020-07-13T18:25:43.511Z'
    },
    {
      title: 'Angular 12 en castellano',
      price: 9,
      author: 'Joseba Madrigal',
      desc: 'Aprende de 0 a experto construyendo un proyecto real que incluye lazy loading, NGRX y PWA.',
      image: 'angular12.png',
      pdfonly: true,
      publish_date: '2021-07-13T18:25:43.511Z'
    },
    {
      title: 'DON QUIJOTE DE LA MANCHA',
      price: 17,
      author: 'Miguel de Cervantes',
      desc: 'El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.',
      image: 'donquijote.jpg',
      pdfonly: false,
      publish_date: '1605-04-23T18:25:43.511Z'
    }
  ];
}
