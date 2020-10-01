import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FirebaseService } from "../../services/firebase.service";
import { BarriosService } from "../../services/barrios.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.scss"],
})
export class BuscarComponent implements OnInit {
  public barrios: String[];
  public filtro: String = "";
  public person: {};
  public realizoBusqueda = false;
  public filtroElegido: String = "";

  public cargando: Boolean = true;
  public mostrarAlerta: Boolean = false;
  public listadoPersonas;
  public filtroBusqueda;
  public busco: boolean = false;
  public vienedeHome = true;
  public titulo: String;

  constructor(
    private firebase: FirebaseService,
    private barriosService: BarriosService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.barrios = this.barriosService.getBarrios();
    let estado = ''
    if (this.route.queryParams["value"].estado) {
      this.titulo = this.route.queryParams["value"].estado
      switch (this.route.queryParams["value"].estado) {
        case "Positivos":
          estado = "Positivo";
          break;
        case "Sospechosos":
          estado = "Sospechoso";
          break;
        case "Fallecidos":
          estado = "Fallecido";
          break;

        case "Recuperados":
          estado = "Alta";
          break;

        default:
          break;
      }

      this.vienedeHome = false;
      await this.buscarPorEstado(estado);
    } else {
      this.cargando = false;
    }

    console.log(this.vienedeHome);
  }

  async buscarPorBarrio(barrio) {
    this.cargando = true;
    this.listadoPersonas = await this.firebase
      .buscarPorBarrio(barrio)
      .then((resp) => resp);
    this.listadoPersonas.length < 1
      ? (this.mostrarAlerta = true)
      : (this.mostrarAlerta = false);
    this.cargando = false;
  }

  async buscarPorFecha(fecha) {
    this.listadoPersonas = [];
    this.cargando = true;
    this.listadoPersonas = await this.firebase
      .listaPersonasPorFecha(fecha)
      .then((resp) => resp);
    this.cargando = false;
  }

  async buscarPorEstado(estado) {
    console.log(estado);
    this.listadoPersonas = [];
    this.cargando = true;
    this.listadoPersonas = await this.firebase
      .listaPersonasPorEstado(estado)
      .then((resp) => resp);
    this.cargando = false;
  }

  reSearch(cambio) {
    this.filtro = "";
  }
}
