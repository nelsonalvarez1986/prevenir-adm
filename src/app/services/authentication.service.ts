import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class AuthenticationService {
userData: Observable<firebase.User>;

constructor(private angularFireAuth: AngularFireAuth) {
this.userData = angularFireAuth.authState;
}

/* Sign in */
SignIn(email: string, password: string) {
this.angularFireAuth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!');
})
.catch(error => {
console.log('Something is wrong:',error.code);
});
}

/* Sign out */
SignOut() {
this.angularFireAuth
.signOut();
}

}