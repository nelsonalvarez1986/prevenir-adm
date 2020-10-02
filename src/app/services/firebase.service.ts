import { Injectable } from "@angular/core";

import { map } from "rxjs/operators";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import { Observable } from "rxjs";
import { rejects } from "assert";
import { Persona } from "../interfaces/personas";
import { BarriosService } from "./barrios.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  public personas: any;
  public persona: any;
  public url = "https://coronapp-b1f3c.firebaseio.com";

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private barrios: BarriosService
  ) {}

  async getPersonsDni(dni: string | number | boolean) {
    const personas: any = await this.getAllPersonas().then((resp) => resp);
    return personas.filter(x => x.dni === dni);
  }

  // Ultimo agregado
  async buscarPorBarrio(barrio: string | number | boolean) {
    return new Promise(async (resolve, reject) => {
      this.http.get(`${this.url}/Personas.json?print=pretty`).subscribe(
        (resp) => {
          const arrBarrio = Object.values(resp);
          resolve(arrBarrio.filter((x) => x.barrio === barrio));
        },
        (error) => reject(error)
      );
    });
  }
  // Ultimo agregado

  getPersonFecha(fecha: any) {
    return fecha;
  }

  async getPersonsBarrios() {
    const BARRIOS = this.barrios.getObjetoBarrios();

    let database = this.db.database;
    let rootRef = database.ref("Personas");

    BARRIOS.map((b) => {
      rootRef
        .orderByChild("barrio")
        .equalTo(b.barrio)
        .on("value", function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            if (childSnapshot.val().Estado === "Positivo") {
              b.positivos = b.positivos + 1;
            }

            if (childSnapshot.val().Estado === "Alta") {
              b.recuperados = b.recuperados + 1;
            }

            if (childSnapshot.val().Estado === "Fallecido") {
              b.fallecidos = b.fallecidos + 1;
            }

            if (childSnapshot.val().Caso_sospechoso === "Si") {
              b.sospechosos = b.sospechosos + 1;
            }
          });
          b.total = b.fallecidos + b.positivos + b.recuperados + b.sospechosos;
        });
    });

    return BARRIOS;
  }

  async getPersonsSospechosos() {
    let database = this.db.database;
    let rootRef = database.ref("Personas");
    let a: number;

    await rootRef
      .orderByChild("Caso_sospechoso")
      .equalTo("Si")
      .once("value", async function (snapshot) {
        a = snapshot.numChildren();
      });

    return a;
  }

  async updatePersona(persona: any) {
    
    let database = this.db.database;
    let rootRef = database.ref("Personas")
    
    new Promise( (resolve, reject) => {
      rootRef.orderByChild("dni").equalTo(persona.dni).on('value', function(snapshot) {  
          snapshot.forEach(function(childSnapshot){
              rootRef.child(childSnapshot.key).update(persona)
              .then(resp => resolve(true) )
              .catch(error => reject(false))
          })
        })
    })
    }

  async addPersona(persona: any) {
    let database = this.db.database;
    let rootRef = database.ref("Personas");
    rootRef.push(persona);
  }
  // Llamadas REST
  async getAllPersonas() {
    return new Promise(async (resolve, reject) => {
      this.http.get(`${this.url}/Personas.json?print=pretty`).subscribe(
        (resp) => {
          resolve(Object.values(resp));
        },
        (error) => reject(error)
      );
    });
  }

  async barriosConMasPositivos() {
    const personas = await this.getAllPersonas().then((resp) => resp);
    const a = await this.totalesBarrio(personas).then((resp) => resp);
    return this.totalesBarrio(personas);
  }

  async totalesBarrio(personas: any) {
    const BARRIOS = this.barrios.getObjetoBarrios();
    const estadisticaFinal = [];
    BARRIOS.forEach((y) => {
      const personasBarrio = personas.filter((x) => x.barrio === y.barrio);
      let totalBarrio = {
        barrio: y.barrio,
        positivos: 0,
        recuperados: 0,
        sospechosos: 0,
        fallecidos: 0,
        total: 0,
      };

      personasBarrio.map((x) => {
        (x.Estado === "Positivo") && totalBarrio.positivos++;
        (x.Estado === "Alta") && totalBarrio.recuperados++;
        (x.Estado === "Fallecido") && totalBarrio.fallecidos++;
        (x.Caso_sospechoso === "Si") && totalBarrio.sospechosos++;
        totalBarrio.total =
          totalBarrio.fallecidos +
          totalBarrio.positivos +
          totalBarrio.recuperados +
          totalBarrio.sospechosos;
      });
      estadisticaFinal.push(totalBarrio);
    });
    return estadisticaFinal;
  }

  async getAllPersonasSeguimiento() {
    return new Promise(async (resolve, reject) => {
      this.http.get(`${this.url}/Seguimiento.json?print=pretty`).subscribe(
        (resp) => {
          resolve(Object.values(resp));
        },
        (error) => reject(error)
      );
    });
  }

  async getPersonsSeguimiento(personaSegui: String) {
    const personas: any = await this.getAllPersonas().then((resp) => resp);
    return personaSegui === "completo"
      ? personas
      : personas.filter((p) => p.Seguimiento === personaSegui);
  }

  async listaPersonasPorEstado(estado) {
    if (estado === "Sospechoso") {
      const personas: any = await this.getAllPersonas().then((resp) => resp);
      return personas.filter((p) => p.Caso_sospechoso === "Si");
    } else {
      const personas: any = await this.getAllPersonas().then((resp) => resp);
      return personas.filter((p) => p.Estado === estado);
    }
  }

  async listaPersonasPorFecha(fecha) {
    const personas: any = await this.getAllPersonas().then((resp) => resp);
    return personas.filter((p) => p.Fecha === fecha);
  }


  async getPersonsState(estado: string) {
    const personas: any = await this.getAllPersonas().then((resp) => resp);
    let contador = 0;
    personas.map((x) => {
      x.Estado === estado && contador++;
    });
    return contador;
  }

  async estadisticasPorBarrio(barrio) {
    const personas: any = await this.getAllPersonas().then((resp) => resp);
    const personasBarrio = personas.filter((x) => x.barrio === barrio);
    
    let totalBarrio = {
        positivos: 0,
        recuperados: 0,
        sospechosos: 0,
        fallecidos: 0,
      };

    personasBarrio.map((x) => {
        (x.Estado === "Positivo") && totalBarrio.positivos++;
        (x.Estado === "Alta") && totalBarrio.recuperados++;
        (x.Estado === "Fallecido") && totalBarrio.fallecidos++;
        (x.Caso_sospechoso === "Si") && totalBarrio.sospechosos++;
      });
    
    return totalBarrio
  }
}
