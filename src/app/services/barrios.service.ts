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
}
