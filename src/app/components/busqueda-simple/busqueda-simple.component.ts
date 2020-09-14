import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-simple',
  templateUrl: './busqueda-simple.component.html',
  styleUrls: ['./busqueda-simple.component.scss']
})
export class BusquedaSimpleComponent implements OnInit {

  public termino: string;
  constructor() { }

  ngOnInit(): void {
  }

  buscarTermino(termino) {
    console.log(termino);
    return termino
  }

}
