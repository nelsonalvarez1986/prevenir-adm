import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarriosService {

  constructor() { }

  getBarrios() {
    return [
            "Barrio Universitario",
            "Villa Arguello",
            "Villa Progreso",
            "El Carmen",
            "Villa Nueva",
            "Villa Paula",
            "Villa Porteña",
            "Santa Cruz",
            "Berisso Centro",
            "Las 14",
            "Solidaridad",
            "Calle Nueva York",
            "Villa España",
            "Villa San Carlos",
            "Villa Dolores",
            "Villa Roca",
            "Obrero",
            "Juan B. Justo",
            "Trabajadores de la Carne",
            "Banco Provincia",
            "Villa Zula",
            "Santa Teresita",
            "Alto los Talas",
    ]
  }

  getObjetoBarrios() {
    return [
      {barrio: "Barrio Universitario", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Arguello", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Progreso", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "El Carmen", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Nueva", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Paula", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Porteña", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Santa Cruz", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Berisso Centro", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Las 14", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Solidaridad", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Calle Nueva York", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa España", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa San Carlos", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Dolores", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Roca", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Obrero", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Juan B. Justo", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Trabajadores de la Carne", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Banco Provincia", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Villa Zula", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Santa Teresita", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0},
      {barrio: "Alto los Talas", positivos: 0, recuperados: 0, sospechosos: 0, fallecidos: 0, total: 0}
    ]
  }
}
