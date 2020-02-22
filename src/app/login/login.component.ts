import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  loggedUser:string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('Logged in user', this.loggedUser);
  }

}
