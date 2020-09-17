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
      backgroundColor: ['#F7464A', '#00C851', '#FDB45C', '#0099CC'],
      hoverBackgroundColor: ['#FF5A5E', '#00C851', '#FFC870', '#33b5e5'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true

  };
  public chartClicked(e: any): void {
    
  }
  public chartHovered(e: any): void { }
  
  constructor( private firebase: FirebaseService) { }

  ngOnInit(): void {
    console.log(this.estadisticaTotal);
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
