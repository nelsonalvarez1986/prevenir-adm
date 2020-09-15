import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import { Observable } from "rxjs";
import { rejects } from "assert";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  public personas: any;
  public persona: any;

  constructor(private db: AngularFireDatabase) {}

  async getAllPersons(dni: string | number | boolean) {
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

  getPersonsBarrios(barrio: any) {
    return barrio;
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

      return await a
  }

  async getPersonsSospechosos() {
    let database = this.db.database;
    let rootRef = database.ref("Personas");
    let a: number;

    await rootRef
      .orderByChild("Caso_sospechoso")
      .equalTo('Si')
      .once("value", async function (snapshot) {
        a = snapshot.numChildren();
      });

      return await a
  }
}
