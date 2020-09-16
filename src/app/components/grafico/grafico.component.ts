import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  @Input() estadisticaTotal: {};

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any>;

  public chartLabels: Array<any> = ['Positivos', 'Recuperados', 'Sospechosos', 'Fallecidos'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#0099CC'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#33b5e5'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  
  constructor( private firebase: FirebaseService) { }

  ngOnInit(): void {
    const a = this.firebase.ultimosSieteDias();
    /*console.log(a);*/

    this.chartDatasets = [
      { data: [
        this.estadisticaTotal['positivos'],
        this.estadisticaTotal['recuperados'],
        this.estadisticaTotal['sospechosos'],
        this.estadisticaTotal['fallecidos'],
        
      ]}
    ];
  }
  
  
}
