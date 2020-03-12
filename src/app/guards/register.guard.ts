import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  canActivate(): boolean {
    if(this.authService.getSettings().allowRegistration){
      console.log('hey')
      return true;
    } else {
      console.log('wrong')
      this.router.navigate(['/login']);
      return false;
    }
  }
}
