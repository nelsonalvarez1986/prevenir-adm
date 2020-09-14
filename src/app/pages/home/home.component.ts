import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public arrPersonas: any[];
  
  constructor() { }

  ngOnInit(): void {

    this.arrPersonas = [
      {
        dni: 123456,
        apellido: 'Lopez',
        nombre: 'Juan',
        barrio: 'Villa Zula'
      },

      {
        dni: 223698,
        apellido: 'Gomez',
        nombre: 'Roberto',
        barrio: 'Juan B. Justo'
      },

      {
        dni: 98456,
        apellido: 'Alvarez',
        nombre: 'Pepe',
        barrio: 'Centro'
      },
    ]
  }

}
