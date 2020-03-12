import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  settings = {
    allowRegistration: true,
  }
  constructor(public auth: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err))
    });
  }

  getAuth() {
    return this.auth.authState.pipe(map(auth => auth));
  }

  logout(){
    this.auth.signOut();
  }

  register(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err))
    });
  }

  getSettings() {
    return this.settings;
  }
}
