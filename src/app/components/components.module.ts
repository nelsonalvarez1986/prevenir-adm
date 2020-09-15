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



@NgModule({
  declarations: [
    HeaderComponent,
    EstadisticaCantidadComponent,
    BusquedaSimpleComponent,
    ListaPersonasComponent,
    MapaComponent,
    GraficoComponent,
    CargandoComponent
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
    CargandoComponent
  ]
})
export class ComponentsModule { }
