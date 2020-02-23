import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  userIsLoggedIn: boolean = false

  constructor(private loggedUser: AuthService) { }

  ngOnInit() {

  }

  login() {
    this.loggedUser.login()
    console.log(this.userName)
    this.userIsLoggedIn = true;
  }

}
