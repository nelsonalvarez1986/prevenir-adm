import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/personas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.scss']
})
export class TablaPersonasComponent implements OnInit {

  @Input() personas: Persona[];
  
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  detallePersona(dni) {
    this.router.navigateByUrl(`persona/${dni}`);
  }

}
