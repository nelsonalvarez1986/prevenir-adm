import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authenticationService:AuthenticationService) { }

  async ngOnInit() {
  
  }

  navegar(destino) {
    this.router.navigateByUrl(destino);
  }

  cerrarSesion() {
    this.authenticationService.SignOut()
    this.router.navigateByUrl('/login')
  }

}
