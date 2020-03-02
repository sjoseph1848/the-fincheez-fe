import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    public auth: AngularFireAuth
  ) {}

  canActivate(): Observable<boolean> {
    return this.auth.authState.pipe(map(auth => {
      if(!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }))
  }
}
