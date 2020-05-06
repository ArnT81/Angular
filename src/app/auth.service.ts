import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedUser: string;

  public admins: AdminFull =
    {
      firstName: 'Anders',
      lastName: 'Söderberg',
      email: 'anders_soderberg@hotmail.com',
      password: '1234567890'
    };

  constructor( private router: Router) {

  }

  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  login(user) {
    if (user.email == this.admins.email && user.password == this.admins.password) {
      localStorage.setItem('user', user.email);
      this.loggedUser = user;
      this.router.navigate(['/dashboard'])
    }
  }

  logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
