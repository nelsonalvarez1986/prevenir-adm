import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Persona } from '../../interfaces/personas';
import { BarriosService } from '../../services/barrios.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  name = 'Angular';
  nameFromChild: string[] = [];
  nameFromChildFun(nameFromChild){
        this.nameFromChild.push(nameFromChild);
  }
  
  public cargando: Boolean = true;
  public dni_persona;
  public persona: Persona[] = [];
  public barrios: String[];
  public sexos = ['Femenino', 'Masculino'];
  public nuevo: Boolean = true;
  public personasSeguimiento;

  constructor( 
    private firebase: FirebaseService,
    private barrioService: BarriosService,
    private ruta: ActivatedRoute,
    private _location: Location
     ) { }

  async ngOnInit() {
    this.barrios = this.barrioService.getBarrios();
    
    this.personasSeguimiento = await this.firebase.getAllPersonasSeguimiento().then(resp => resp);
    
    (!this.personasSeguimiento[0]) && this.personasSeguimiento.splice(0,1)
    
    if (this.ruta.snapshot.paramMap.get("dni_persona")) {
      this.dni_persona = this.ruta.snapshot.paramMap.get("dni_persona");
      await this.buscarTermino(this.dni_persona);
      this.nuevo = false;
    }else {
      this.cargando = false;
      this.persona.push (
        {
          Caso_sospechoso: false,
          Contacto_estrecho: false,
          Dificultad_respiratoria: false,
          Dolor_de_garganta: false,
          Estado: "Negativo",
          Fecha: "",
          Fiebre: false,
          Perdida_gusto_olfato: false,
          Personal_esencial: false,
          Tos: false,
          apellido: "",
          barrio: "Berisso Centro",
          direc: "",
          dni: "",
          edad: "",
          email: "",
          nombre: "",
          sexo: "Femenino",
          telefono: "",
        }
      );
    }
  }

  async buscarTermino(dni) {
    this.persona = await this.firebase.getPersonsDni(dni).then(resp => resp);
    
    this.persona[0].Caso_sospechoso = this.convertirBoolean(this.persona[0].Caso_sospechoso) || false;
    this.persona[0].Contacto_estrecho = this.convertirBoolean(this.persona[0].Contacto_estrecho) || false;
    this.persona[0].Dificultad_respiratoria = this.convertirBoolean(this.persona[0].Dificultad_respiratoria) || false;
    this.persona[0].Dolor_de_garganta = this.convertirBoolean(this.persona[0].Dolor_de_garganta) || false;
    this.persona[0].Fiebre = this.convertirBoolean(this.persona[0].Fiebre) || false;
    this.persona[0].Perdida_gusto_olfato = this.convertirBoolean(this.persona[0].Perdida_gusto_olfato) || false;
    this.persona[0].Personal_esencial = this.convertirBoolean(this.persona[0].Personal_esencial) || false;
    this.persona[0].Tos = this.convertirBoolean(this.persona[0].Tos) || false;
    this.cargando = false;
  }

  convertirBoolean(campo: String){
    return (campo === 'No' || campo === undefined  || campo === null || campo === '' )
    ?  false
    :  true;
  }

  convertirTexto(campo: Boolean){
    return (!campo || campo === undefined )
    ?  'No'
    :  'Si';
  }

  async addPersona(p) {
    p.Caso_sospechoso = this.convertirTexto(p.Caso_sospechoso);
    p.Contacto_estrecho = this.convertirTexto(p.Contacto_estrecho);
    p.Dificultad_respiratoria = this.convertirTexto(p.Dificultad_respiratoria);
    p.Dolor_de_garganta = this.convertirTexto(p.Dolor_de_garganta);
    p.Fiebre = this.convertirTexto(p.Fiebre);
    p.Perdida_gusto_olfato = this.convertirTexto(p.Perdida_gusto_olfato);
    p.Personal_esencial = this.convertirTexto(p.Personal_esencial);
    p.Tos = this.convertirTexto(p.Tos);

    await this.firebase.addPersona(p);
    this.cargando = false;
    this._location.back();
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
    this._location.back();

  }

  cancelarEdit() {
    this._location.back();
  }

}
