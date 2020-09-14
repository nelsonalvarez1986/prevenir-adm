import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {

  @Input() personas: any[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
