import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser:string;

  public admins: AdminFull[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      password: '1234567890'
    },
    {
      firstName: 'Kylie',
      lastName: 'Johnson',
      email: 'kylie.johnson@email.com',
      password: '0987654321'
    }
  ];

  constructor() {
    console.log('login injected')
  }

  checkIfLoggedIn() {
    if (this.loggedUser ) {

    }
  }

  login() {
    localStorage.setItem ('Logged in', this.loggedUser)
  }

  logout() {
    localStorage.removeItem('Logged in')
  }
}
