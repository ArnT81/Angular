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
  userList: any; 
  
  // userList: string[] = ['Anders Söderberg', 'Anna Söderberg', 'Alice Söderberg', 'Leonora Söderberg']

  constructor(private authService: AuthService, private getUsersService: GetUsersService) {
    this.getJSONUsers();
    this.checkUser()
   
  }

  ngOnInit() {

  }

  addUserFunc(addUser: string) {
    this.userList.push(addUser);
  }

  removeUserFunc() {
    this.userList.shift();
  }

  getJSONUsers() {
    let url = 'users'
    this.getUsersService.getUsers(url)
      .then(response => response.json())
      .then(json => {
        this.userList = json;
        console.log(this.userList);
      })



  }

  checkUser() {
    return Boolean(this.authService.checkIfLoggedIn());
  }
}
