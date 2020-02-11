import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<string>();
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add(value: string) {
    this.addUserEvent.emit(value)
  }

  remove(value: string) {
    this.removeUser.emit(value)
  }


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }



}
