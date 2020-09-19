
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

import { ComponentsModule } from "./components/components.module";

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { FirebaseService } from "./services/firebase.service";
import { PersonaComponent } from './pages/persona/persona.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ShapeService } from './services/shape.service';
import { HttpClientModule } from "@angular/common/http";
import { PopUpService } from './services/pop-up.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonaComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'coronapp-b1f3c'),
    
  ],
  providers: [FirebaseService, ShapeService, PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
