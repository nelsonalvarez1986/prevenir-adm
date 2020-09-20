import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { BarriosService } from '../../services/barrios.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  filtros: string[] = ['Fecha', 'Barrios', 'Estado'];
  public barrios: String[];
  public filtro:String = '';
  public person: {};
  public realizoBusqueda = false;

  public cargando: Boolean = true;
  public mostrarAlerta: Boolean = false;
  public listadoBarrio;
  public filtroBusqueda;
  
  constructor(
    private firebase: FirebaseService,
    private barriosService: BarriosService,
    ) { }

  async ngOnInit(){
    this.barrios = this.barriosService.getBarrios();

  }

  async buscarPorBarrio(barrio) {

    // Ultimo agregado
    console.log(barrio);
    this.cargando = true
    this.listadoBarrio = await this.firebase.buscarPorBarrio(barrio).then(resp => resp);
    
    (this.listadoBarrio.length < 1) 
    ? this.mostrarAlerta = true
    : this.mostrarAlerta = false
    
    this.cargando = false;
  }

  buscarPorFecha(fecha) {
    console.log(fecha);
  }
 
  buscarPorEstado(estado) {
    console.log(estado);
  }



}
