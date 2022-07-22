import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users: IUser[];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('userData')  || '[]');
  };

  addUser(user : IUser){
    this.users.push(user);
    localStorage.setItem('userData', JSON.stringify(this.users));
  }
}
