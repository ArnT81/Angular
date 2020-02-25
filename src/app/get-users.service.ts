import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  /* users: object[]; */
  constructor() { }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        var i = 0;
        var users = []
        json.forEach(element => {
          users.push(json[i++])
        });
        return users
        /* console.log(users) */
      })
    
  }
}
/*      username, name, city, street, zipcode
*/