import { Component, Input, OnInit } from '@angular/core';
import { Cantidades } from '../../interfaces/cantidades';

@Component({
  selector: 'app-seccion-estadisticas',
  templateUrl: './seccion-estadisticas.component.html',
  styleUrls: ['./seccion-estadisticas.component.scss']
})
export class SeccionEstadisticasComponent implements OnInit {

  @Input() cantidades: Cantidades;
  
  constructor() { }

  ngOnInit() {}

} 
