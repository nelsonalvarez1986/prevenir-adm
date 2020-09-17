import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Cantidades } from '../../interfaces/cantidades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cargando: boolean = true;
  
  public cantidades: Cantidades

  public arrBarrios: any[];

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 4, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];
  
  constructor( private firebase: FirebaseService) { }

  async ngOnInit() {

    this.cantidades = {
      positivos: await this.firebase.getPersonsState('Positivo').then( resp => resp),
      sospechosos: await this.firebase.getPersonsSospechosos().then( resp => resp),
      recuperados: await this.firebase.getPersonsState('Alta').then( resp => resp),
      fallecidos: await this.firebase.getPersonsState('Fallecido').then( resp => resp),
    }
    
    this.cargando = false;
  }

}
