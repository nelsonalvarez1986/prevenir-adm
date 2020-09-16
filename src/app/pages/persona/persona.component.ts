import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Persona } from '../../interfaces/personas';
import { FormGroup, FormControl } from '@angular/forms';
import { BarriosService } from '../../services/barrios.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  public cargando: Boolean = true;
  public dni_persona;
  public persona: any;
  public barrios: String[];
  public sexos = ['Femenino', 'Masculino'];
   

  constructor( 
    private firebase: FirebaseService,
    private barrioService: BarriosService,
    private ruta: ActivatedRoute,
    private router: Router
     ) { }

  async ngOnInit() {
    this.barrios = this.barrioService.getBarrios();
    this.dni_persona = this.ruta.snapshot.paramMap.get("dni_persona");
    await this.buscarTermino(this.dni_persona);
  }

  async buscarTermino(dni) {
    await this.firebase.getAllPersons(dni).then( (resp) => {
      if (resp.val()) {
        this.persona = Object.values(resp.val());
      }else {
        this.persona = null;
      };
    });
    
    this.persona[0].Caso_sospechoso = this.convertirBoolean(this.persona[0].Caso_sospechoso);
    this.persona[0].Contacto_estrecho = this.convertirBoolean(this.persona[0].Contacto_estrecho) || false;
    this.persona[0].Dificultad_respiratoria = this.convertirBoolean(this.persona[0].Dificultad_respiratoria);
    this.persona[0].Dolor_de_garganta = this.convertirBoolean(this.persona[0].Dolor_de_garganta);
    this.persona[0].Fiebre = this.convertirBoolean(this.persona[0].Fiebre);
    this.persona[0].Perdida_gusto_olfato = this.convertirBoolean(this.persona[0].Perdida_gusto_olfato);
    this.persona[0].Personal_esencial = this.convertirBoolean(this.persona[0].Personal_esencial);
    this.persona[0].Tos = this.convertirBoolean(this.persona[0].Tos);

    this.cargando = false;
  }

  convertirBoolean(campo: String){
    
    return (campo === 'No' || campo === undefined )
    ?  false
    :  true;
  }

  convertirTexto(campo: Boolean){
    return (!campo || campo === undefined )
    ?  'No'
    :  'Si';
  }

  async updatePersona( p ) {
    this.cargando = true
    p.Caso_sospechoso = this.convertirTexto(p.Caso_sospechoso);
    p.Contacto_estrecho = this.convertirTexto(p.Contacto_estrecho);
    p.Dificultad_respiratoria = this.convertirTexto(p.Dificultad_respiratoria);
    p.Dolor_de_garganta = this.convertirTexto(p.Dolor_de_garganta);
    p.Fiebre = this.convertirTexto(p.Fiebre);
    p.Perdida_gusto_olfato = this.convertirTexto(p.Perdida_gusto_olfato);
    p.Personal_esencial = this.convertirTexto(p.Personal_esencial);
    p.Tos = this.convertirTexto(p.Tos);

    await this.firebase.updatePersona(p);
    this.cargando = false;
    this.router.navigateByUrl(`/`);

  }

  cancelarEdit() {
    this.router.navigateByUrl(`/`);
  }

}