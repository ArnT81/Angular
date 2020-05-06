import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

/**
  * @variable declare user for api-request, uses id in params to show right user
  * in view and userId to mock id for created users
  * @recieves users from json-placeholder 
*/

export class SingleUserComponent implements OnInit {
  user: object;
  id: string;
  userId: number;
  
  constructor(private getUsersService: GetUsersService, private route: ActivatedRoute) {
    this.getJSONUsers();
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.userId = params.id -1
    })
  }

  ngOnInit() {

  }

  getJSONUsers() {
    let url = 'users'
    this.getUsersService.getUsers(url)
      .then(response => response.json())
      .then(json => {
        this.user = json[this.userId];
      })
  }
}
