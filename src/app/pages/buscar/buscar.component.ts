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
  
  constructor(
    private firebase: FirebaseService,
    private barriosService: BarriosService,
    ) { }

  ngOnInit(){
    this.barrios = this.barriosService.getBarrios();
  }

  buscarPorBarrio(barrio) {
    console.log(barrio);
  }

  buscarPorFecha(fecha) {
    console.log(fecha);
  }

  buscarPorEstado(estado) {
    console.log(estado);
  }



}
