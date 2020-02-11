import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<string>();

  public addUsers: string = "";

  constructor() { }

  ngOnInit() {
  }

  add(value: string) {
    this.addUserEvent.emit(value)
    this.addUsers = "";
  }

  remove() {
    this.removeUserEvent.emit()
  }
}
