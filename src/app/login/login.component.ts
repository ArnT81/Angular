import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../models/admin-login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: AdminLogin = new AdminLogin('','');
  
  constructor(private authService: AuthService) {

  }

  ngOnInit() {

  }

  login(): void {
    this.authService.login(this.userName)
  }

  logout(): void {
    this.authService.logout()
  }

  checkUser() {
    return Boolean(this.authService.checkIfLoggedIn())
  }
}
