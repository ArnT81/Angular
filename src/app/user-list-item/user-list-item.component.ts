import { Component, OnInit, Input } from '@angular/core';

/**
  * @Input array from app-user-list (originate from app-dashboard) for use in *ngfor in template
*/

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  @Input() user: string[];
  @Input() textColor: string;

  constructor() {
   
  }

  ngOnInit() {
    
  }
}
