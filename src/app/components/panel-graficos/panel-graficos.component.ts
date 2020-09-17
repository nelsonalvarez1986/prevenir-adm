import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-panel-graficos',
  templateUrl: './panel-graficos.component.html',
  styleUrls: ['./panel-graficos.component.scss']
})
export class PanelGraficosComponent implements OnInit {

  @Input() arrBarrios:[] = [];

  public arrBarriosOrdenados: any[] = [];

  constructor(private firebase: FirebaseService) { }

  async ngOnInit() {
    const barrios = await this.firebase.barriosConMasPositivos().then( resp => resp).catch(error => error)
    const barriosOrdenados = barrios.sort( (a,b) => b.total - a.total );

    this.arrBarriosOrdenados = barriosOrdenados.slice(0,3)
    console.log( this.arrBarriosOrdenados );
  }

}
