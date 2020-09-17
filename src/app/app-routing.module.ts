import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PersonaComponent } from './pages/persona/persona.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'persona/:dni_persona', component: PersonaComponent },
  { path: 'persona', component: PersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
