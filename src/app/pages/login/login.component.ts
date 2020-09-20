import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authenticationService:AuthenticationService, private router: Router) { }

  email: string;
  password: string;

  signIn() {
    this.authenticationService.SignIn(this.email, this.password)
    
    this.email = '';
    this.password = '';
    }
    
    signOut() {
    this.authenticationService.SignOut();
    }

  async isLogin(){
    const login = this.authenticationService.userData.subscribe(resp => {
      const l = (resp) ? true : false
      console.log(l);
      return l
    }, error => error)
    
    return login
  }

}
