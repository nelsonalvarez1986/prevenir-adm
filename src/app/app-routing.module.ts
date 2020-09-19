import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PersonaComponent } from './pages/persona/persona.component';
import { ListadoSeguimientoComponent } from './pages/listado-seguimiento/listado-seguimiento.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'persona/:dni_persona', component: PersonaComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'seguimiento', component: ListadoSeguimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
