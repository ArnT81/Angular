import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  /* users: object[]; */
  constructor() { }

  getUsers(url) {
    console.log('comes here' + url);
    let base_url = 'https://jsonplaceholder.typicode.com/'
    return fetch(base_url + url)
  }
}
/*      username, name, city, street, zipcode
*/