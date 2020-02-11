import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList:string[] = ['Anders Söderberg', 'Anna Söderberg', 'Alice Söderberg', 'Leonora Söderberg']
  constructor() { }

  ngOnInit() {
  }

  addUserFunc(addUser: string) {
    this.userList.push(addUser);
  }

  removeUserFunc() {
    this.userList.shift()
  }

}
