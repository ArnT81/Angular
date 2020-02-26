import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { GetUsersService } from '../get-users.service';

/**
  * @variable declares the userList array that is used in rest of the app
  * @recieves events from child app-edit-user 
*/

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList: string[] = ['Anders Söderberg', 'Anna Söderberg', 'Alice Söderberg', 'Leonora Söderberg']

  constructor(private authService: AuthService, private get: GetUsersService) {
    this.checkUser()
    /* this.getJSONUsers() */
  }

  ngOnInit() {

  }

  addUserFunc(addUser: string) {
    this.userList.push(addUser);
  }

  removeUserFunc() {
    this.userList.shift()
  }

 /*  getJSONUsers() {
  this.get.getUsers()
    
  } */

  checkUser() {
    return Boolean(this.authService.checkIfLoggedIn())
  }
}
