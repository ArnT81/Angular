import { Component, OnInit, Input } from '@angular/core';

/**
  * @variable 1 boolean used to toggle with and the other one with the string determing which textcolor user-list-items shoul have  
  * @Input from app-dashboard only to use in next child app-user-list-item
  * @function. toggles the color
*/

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: string[];

  textColor: string = 'red';
  bool: boolean = false;
  
  constructor() {
  }

  ngOnInit() {
  }

  toggleColor() {
    if (this.bool = !this.bool) {
      this.textColor = 'green';
    }
    else {
      this.textColor = 'red';
    }
  }
}