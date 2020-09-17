import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-busqueda-simple',
  templateUrl: './busqueda-simple.component.html',
  styleUrls: ['./busqueda-simple.component.scss']
})
export class BusquedaSimpleComponent implements OnInit {
  
  @ViewChild('alert', { static: false }) alert: ElementRef;

  public termino: string;
  public person: {};
  public realizoBusqueda = false;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  
  buscarTermino(termino) {
    this.firebase.getPersonsDni(termino).then( resp => {
      (resp.val())
      ? this.person = Object.values(resp.val())
      : this.person = undefined;
      this.realizoBusqueda = true
    });
  }

}
