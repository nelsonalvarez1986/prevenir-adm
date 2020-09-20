import { Component, Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { BarriosService } from '../../services/barrios.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public barrios: String[];
  public filtro:String = '';
  public person: {};
  public realizoBusqueda = false;
  public filtroElegido: String = ''

  public cargando: Boolean = true;
  public mostrarAlerta: Boolean = false;
  public listadoPersonas;
  public filtroBusqueda;
  public busco: boolean = false;
  
  constructor(
    private firebase: FirebaseService,
    private barriosService: BarriosService,
    ) { }

  async ngOnInit(){
    this.barrios = this.barriosService.getBarrios();
  }

  async buscarPorBarrio(barrio) {
    this.cargando = true;
    this.listadoPersonas = await this.firebase.buscarPorBarrio(barrio).then(resp => resp);
    (this.listadoPersonas.length < 1) 
    ? this.mostrarAlerta = true
    : this.mostrarAlerta = false
    this.cargando = false;
  }

  async buscarPorFecha(fecha) {
    this.listadoPersonas = []
    this.cargando = true;
    this.listadoPersonas = await this.firebase.listaPersonasPorFecha(fecha).then(resp => resp);
    console.log(this.listadoPersonas);
    this.cargando = false;
  }
 
  async buscarPorEstado(estado) {
    this.listadoPersonas = []
    this.cargando = true;
    this.listadoPersonas = await this.firebase.listaPersonasPorEstado(estado).then(resp => resp);
    this.cargando = false;
  }

  reSearch(cambio) {
    console.log(cambio);
    this.filtro = ''
  }



}
