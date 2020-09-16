import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  @Input() headerType = '';
  @Input() title = 'Prueba';
  @Input() alignment = 'center';
  @Input() src= '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
