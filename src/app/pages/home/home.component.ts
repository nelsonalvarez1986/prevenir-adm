import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Cantidades } from '../../interfaces/cantidades';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cargando: boolean = true;

  public cantidades: Cantidades

  public arrBarrios: any[];

  constructor( 
    private firebase: FirebaseService,
    private userIdle: UserIdleService
    ) { }

  async ngOnInit() {

    this.userIdle.startWatching();
    /*this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));*/

    this.cantidades = {
      positivos: await this.firebase.getPersonsState('Positivo').then( resp => resp),
      sospechosos: await this.firebase.getPersonsSospechosos().then( resp => resp),
      recuperados: await this.firebase.getPersonsState('Alta').then( resp => resp),
      fallecidos: await this.firebase.getPersonsState('Fallecido').then( resp => resp),
    }
    
    this.cargando = false;
  }

  startWatching() {
    this.userIdle.startWatching();
  }

}
