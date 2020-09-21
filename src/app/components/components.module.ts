import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EstadisticaCantidadComponent } from './estadistica-cantidad/estadistica-cantidad.component';
import { BusquedaSimpleComponent } from './busqueda-simple/busqueda-simple.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { MapaComponent } from './mapa/mapa.component';
import { GraficoComponent } from './grafico/grafico.component';
import { CargandoComponent } from './cargando/cargando.component';
import { SeccionEstadisticasComponent } from './seccion-estadisticas/seccion-estadisticas.component';
import { CardEstadisticaComponent } from './card-estadistica/card-estadistica.component';
import { CardPersonaBuscadaComponent } from './card-persona-buscada/card-persona-buscada.component';
import { PanelGraficosComponent } from './panel-graficos/panel-graficos.component';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { StatsMapComponent } from './stats-map/stats-map.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    EstadisticaCantidadComponent,
    BusquedaSimpleComponent,
    ListaPersonasComponent,
    MapaComponent,
    GraficoComponent,
    CargandoComponent,
    SeccionEstadisticasComponent,
    CardEstadisticaComponent,
    CardPersonaBuscadaComponent,
    PanelGraficosComponent,
    TablaPersonasComponent,
    StatsMapComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    
  ],
  exports: [
    HeaderComponent,
    EstadisticaCantidadComponent,
    BusquedaSimpleComponent,
    ListaPersonasComponent,
    MapaComponent,
    GraficoComponent,
    CargandoComponent,
    SeccionEstadisticasComponent,
    CardEstadisticaComponent,
    CardPersonaBuscadaComponent,
    PanelGraficosComponent,
    TablaPersonasComponent,
    StatsMapComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
