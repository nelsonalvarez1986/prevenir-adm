import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { rejects } from 'assert';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigateByUrl('/')
        return res;
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Usuario y/o Password incorrectos.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.signOut();
  }

  async isLogin(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
        this.userData.subscribe(resp => {
            if (resp !== null) {
                resolve(true)
            }else(
                resolve(false)
            ) 
        })
    })
  }

}
