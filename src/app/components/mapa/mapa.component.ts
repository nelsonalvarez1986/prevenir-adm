import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
//import * as Leaflet from 'leaflet';
import * as L from "leaflet";
import { antPath } from "leaflet-ant-path";
import { ShapeService } from "../../services/shape.service";
import { Cantidades } from "../../interfaces/cantidades";
import { style } from "@angular/animations";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"],
})
export class MapaComponent implements AfterViewInit {
  @Input() cantidades: Cantidades;

  private map;

  private states;

  public barrio: String = "";
  public data: any;
  public cargando: boolean = true;

  constructor(
    private shapeService: ShapeService,
    private firebase: FirebaseService
  ) {}

  ngAfterViewInit(): void {
    this.initMap();

    this.shapeService.getStateShapes().subscribe((states) => {
      this.states = states;
      this.highlightFeature;
      this.resetFeature;
      this.initStatesLayer();
    });
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [-34.8952268,-57.8773563],
      zoom: 13,
    });

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 13,
        minZoom: 13,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    tiles.addTo(this.map);
  }

  private getColor(barrio, d) {
    let positivos = d.find(x => x.barrio === barrio)
    return positivos.positivos > 1000 ? '#800026' :
           positivos.positivos > 500  ? '#BD0026' :
           positivos.positivos > 100  ? '#E31A1C' :
           positivos.positivos > 50  ? '#FC4E2A' :
           positivos.positivos > 25   ? '#FD8D3C' :
           positivos.positivos > 15   ? '#FEB24C' :
           positivos.positivos > 5   ? '#FED976' :
                      '#FFEDA0';
  }

  private async initStatesLayer() {
    const positivos = await this.positivosDeLosBarrios().then((resp) => resp);
    const stateLayer = L.geoJSON(this.states, {
      style: (feature) => ({
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: this.getColor(feature.properties["Name"], positivos)
      }),
      onEachFeature: (feature, layer) =>
        layer.on({
          mouseover: (e) =>
            this.highlightFeature(e, feature.properties["Name"]),
          mouseout: (e) => this.resetFeature(e),
        }),
    });

    this.map.addLayer(stateLayer);
  }

  private async highlightFeature(e, barrio) {
    this.cargando = true;
    const layer = e.target;
    this.barrio = barrio;
    this.data = await this.firebase
      .estadisticasPorBarrio(barrio)
      .then((resp) => resp);
    this.cargando = false;
  }

  private resetFeature(e) {
    const layer = e.target;
    this.data = undefined;
    this.barrio = undefined;
  }

  
  // Metodo que devuelve array con los positivos de cada barrio
  async positivosDeLosBarrios() {
    const todasLasPersonas = await this.firebase
      .getAllPersonas()               
      .then((resp) => resp);

    const valoresPorBarrio = await this.firebase
      .totalesBarrio(todasLasPersonas)
      .then((resp) => resp);

    return valoresPorBarrio.map((x) => {
      return {
        barrio: x.barrio,
        positivos: x.positivos,
      };
    });

  }
}
