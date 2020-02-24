import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((value) => {
      console.log(value); // value from event
      return value
    })
  }

  ngOnInit() {
  }

}
