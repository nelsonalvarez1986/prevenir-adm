import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadistica-cantidad',
  templateUrl: './estadistica-cantidad.component.html',
  styleUrls: ['./estadistica-cantidad.component.scss']
})
export class EstadisticaCantidadComponent implements OnInit {

  @Input() cantidad: number;
  @Input() color: string;
  @Input() titulo: string;
  
  constructor() { }

  ngOnInit(): void {
  }



}
