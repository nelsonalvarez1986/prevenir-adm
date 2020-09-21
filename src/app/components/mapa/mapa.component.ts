import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
//import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { ShapeService } from '../../services/shape.service';
import { Cantidades } from '../../interfaces/cantidades';
import { style } from '@angular/animations';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements AfterViewInit {

  @Input() cantidades: Cantidades;

  private map;

  private states;

  public barrio: String = '';
  public data: any;

  
  constructor( private shapeService: ShapeService, private firebase: FirebaseService ) { }

  ngAfterViewInit(): void {
    this.initMap()

    this.shapeService.getStateShapes().subscribe(states => {
      this.states = states;
      this.highlightFeature;
      this.resetFeature;
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
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => (this.highlightFeature(e, feature.properties['Name'])),
          mouseout: (e) => (this.resetFeature(e)),
        })
      )
    });

    this.map.addLayer(stateLayer);
  }

  
  private async highlightFeature(e,barrio)  {
    const layer = e.target;
    this.barrio = barrio;
    this.data = await this.firebase.estadisticasPorBarrio(barrio).then(resp => resp);
  }

  private resetFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#19F3BF',
      fillOpacity: 0.8,
      fillColor: '#F9BE16'
    });
  }

  
}
