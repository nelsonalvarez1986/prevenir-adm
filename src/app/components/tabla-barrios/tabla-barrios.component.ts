import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-barrios',
  templateUrl: './tabla-barrios.component.html',
  styleUrls: ['./tabla-barrios.component.scss']
})
export class TablaBarriosComponent implements OnInit {

  @Input() barrios: any[];
  public headElements = [
    {
      icono: 'briefcase-medical',
      color: 'text-danger',
      descripcion: 'Positivos',
    },
    {
      icono: 'file-medical',
      color: 'text-warning',
      descripcion: 'Sospechosos',
    },
    {
      icono: 'clinic-medical',
      color: 'text-success',
      descripcion: 'Recuperados',
    },
    {
      icono: 'book-dead',
      color: 'text-muted',
      descripcion: 'Fallecidos',
    },

  ]
  
  constructor() { }

  ngOnInit(): void {}

}
