import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.auth.user$.map(user => {
    if (user) {return true; }

    this.router.navigate(['/login']);
    return false;
    });
  }
}
