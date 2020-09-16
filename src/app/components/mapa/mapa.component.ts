import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { ShapeService } from '../../services/shape.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements AfterViewInit {
  private map;

  private states;

  constructor( private shapeService: ShapeService ) { }

  ngAfterViewInit(): void {
    this.initMap()

    this.shapeService.getStateShapes().subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -34.9007213, -57.8646547 ],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    

  tiles.addTo(this.map);
  tiles.addTo(this.map);

  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      })
    });

    this.map.addLayer(stateLayer);
  }


}
