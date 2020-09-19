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
    let database = this.db.database;
    let rootRef = database.ref("Personas");

    return rootRef
      .orderByChild("dni")
      .equalTo(dni)
      .once("value", function (snapshot) {
        return snapshot;
      });
  }

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

            if (childSnapshot.val().Estado === "Fallecidos") {
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

  async getPersonsState(estado: string) {
    let database = this.db.database;
    let rootRef = database.ref("Personas");
    let a: number;

    await rootRef
      .orderByChild("Estado")
      .equalTo(estado)
      .once("value", async function (snapshot) {
        a = snapshot.numChildren();
      });

    return a;
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
    let rootRef = database.ref("Personas");
    const personaFire = (await this.getPersonsDni(persona.dni)).val();
    let idFire = Object.keys(personaFire)[0];
    rootRef.child(idFire).update(persona);
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
        x.Estado === "Positivo" && totalBarrio.positivos++;
        x.Estado === "Alta" && totalBarrio.recuperados++;
        x.Estado === "Fallecido" && totalBarrio.fallecidos++;
        x.Caso_sospechoso === "Si" && totalBarrio.fallecidos++;
        totalBarrio.total =
          totalBarrio.fallecidos +
          totalBarrio.positivos +
          totalBarrio.recuperados +
          totalBarrio.sospechosos;
      });
      estadisticaFinal.push(totalBarrio);
    });
    return estadisticaFinal
    
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
    return personas.filter( p => p.Seguimiento === personaSegui )
  }
}
