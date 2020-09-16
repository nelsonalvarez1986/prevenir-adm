import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-estadistica',
  templateUrl: './card-estadistica.component.html',
  styleUrls: ['./card-estadistica.component.scss']
})
export class CardEstadisticaComponent implements OnInit {

  @Input() cantidad: number;
  @Input() color: string;
  @Input() titulo: string;
  @Input() icono: string;
  
  constructor() { }

  ngOnInit(): void {}

}
