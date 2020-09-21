import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-panel-graficos',
  templateUrl: './panel-graficos.component.html',
  styleUrls: ['./panel-graficos.component.scss']
})
export class PanelGraficosComponent implements OnInit {

  @Input() arrBarrios:[] = [];

  public arrBarriosOrdenadosGraficos: any[] = [];
  public arrBarriosOrdenadosTabla: any[] = [];

  constructor(private firebase: FirebaseService) { }

  async ngOnInit() {
    const barrios = await this.firebase.barriosConMasPositivos().then( resp => resp).catch(error => error)
    const barriosOrdenados = barrios.sort( (a,b) => b.total - a.total );
    this.arrBarriosOrdenadosGraficos = barriosOrdenados.slice(0,1)
    this.arrBarriosOrdenadosTabla = barriosOrdenados.slice(1,6)
  }

}
