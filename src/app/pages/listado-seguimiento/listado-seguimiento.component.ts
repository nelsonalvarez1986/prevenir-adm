import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-seguimiento',
  templateUrl: './listado-seguimiento.component.html',
  styleUrls: ['./listado-seguimiento.component.scss']
})
export class ListadoSeguimientoComponent implements OnInit {

  public cargando: Boolean = true;
  public personasSeguimiento;
  public persona;
  public listadoSeguimiento: [];
  public mostrarAlerta: Boolean = false
  
  constructor(
    private firebase: FirebaseService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.personasSeguimiento = await this.firebase.getAllPersonasSeguimiento().then(resp => resp);
    (!this.personasSeguimiento[0]) && this.personasSeguimiento.splice(0,1);
    this.cargando = false;
  }

  async buscarSeguimiento(persona) {
    this.cargando = true
    this.listadoSeguimiento = await this.firebase.getPersonsSeguimiento(persona).then(resp => resp);
    
    (this.listadoSeguimiento.length < 1) 
    ? this.mostrarAlerta = true
    : this.mostrarAlerta = false
    
    this.cargando = false;
  }

}
