import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PersonaComponent } from './pages/persona/persona.component';
import { ListadoSeguimientoComponent } from './pages/listado-seguimiento/listado-seguimiento.component';
import { LoginComponent } from './pages/login/login.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { UserGuard } from './guards/user.guard'




const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ UserGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'persona/:dni_persona', component: PersonaComponent, canActivate: [ UserGuard ] },
  { path: 'persona', component: PersonaComponent, canActivate: [ UserGuard ] },
  { path: 'seguimiento', component: ListadoSeguimientoComponent, canActivate: [ UserGuard ] },
  { path: 'buscar', component: BuscarComponent, canActivate: [ UserGuard ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
