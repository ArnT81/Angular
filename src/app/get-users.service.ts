import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  constructor() { }

  getUsers(url) {
    let base_url = 'https://jsonplaceholder.typicode.com/';
    return fetch(base_url + url);
  }
}