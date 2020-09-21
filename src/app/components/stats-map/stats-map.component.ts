import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-stats-map',
  templateUrl: './stats-map.component.html',
  styleUrls: ['./stats-map.component.scss']
})
export class StatsMapComponent implements OnInit {

  @Input() barrio: string = '';
  @Input() data: any;

  constructor( private firebase: FirebaseService ) { }

  ngOnInit() {}

}
