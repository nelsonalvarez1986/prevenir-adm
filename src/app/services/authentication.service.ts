import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database"
import { Observable } from "rxjs";
import { rejects } from 'assert';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase';


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public userData: Observable<firebase.User>;
  pipe: any;
  userId: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    
    
    this.userData = angularFireAuth.authState;
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigateByUrl('/')

        this.pipe = new DatePipe('en-US'); // Use your own locale
        const now = Date.now();
        const fechaYhora = this.pipe.transform(now, 'dd/MM/yyyy, HH:mm:ss');
        const data = {
          fechaYhora,
          email
        }
      
        let database = this.db.database;
        let rootRef = database.ref("log");
        rootRef.push(data);

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
