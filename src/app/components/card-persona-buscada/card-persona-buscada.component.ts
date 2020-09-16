import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-persona-buscada',
  templateUrl: './card-persona-buscada.component.html',
  styleUrls: ['./card-persona-buscada.component.scss']
})
export class CardPersonaBuscadaComponent implements OnInit {

  @Input() personas: any[];
    
  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }

  irPersona(dni) {
    this.router.navigateByUrl(`persona/${dni}`);
  }

}
